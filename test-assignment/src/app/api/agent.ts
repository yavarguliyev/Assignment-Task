import axios, { AxiosResponse } from "axios";
import { history } from "../..";
import { IPhoto } from "../models/photo";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('jwt');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
}, error => {
  return Promise.reject(error);
});

axios.interceptors.response.use(undefined, error => {
  if (error.message === 'Network Error' && !error.response) {
    console.log('Network error - make sure API is running!');
  }
  const { status, data, config, headers } = error.response;
  if (status === 404) {
    history.push('/notfound');
  }
  if (status === 401 && headers['www-authenticate'] !== '' && headers['content-length'] === '0') {
    window.localStorage.removeItem('jwt');
    history.push('/');
    console.log('Your session has expired, please login again');
  }
  if (status === 400 && config.method === 'get' && data.errors.hasOwnProperty('id')) {
    history.push('/notfound');
  }
  if (status === 500) {
    console.log('Server error - check the terminal for more info!');
  }
  throw error.response;
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  del: (url: string) => axios.delete(url).then(responseBody),
  postForm: (url: string, file: Blob) => {
    let formData = new FormData();
    formData.append('File', file);

    return axios.post(url, formData, {
      headers: { 'Content-type': 'multipart/form-data' }
    }).then(responseBody);
  }
}

const Photos = {
  uploadPhoto: (photo: Blob): Promise<IPhoto> => requests.postForm(``, photo),
  deletePhoto: (id: string) => requests.del(`/${id}`)
};

const Token = {
  get: () => axios.get('/auth', {params: {user: 'USERNAME'}})
};

const agent = {
  Photos,
  Token
};

export default agent;