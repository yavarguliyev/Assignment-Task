import { RootStore } from './rootStore';
import { history } from "../..";
import { observable, action, makeObservable, reaction, computed, runInAction } from "mobx";
import agent from '../api/agent';

export default class CommonStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this);

    reaction(
      () => this.token,
      token => {
        if (token) {
          window.localStorage.setItem('jwt', token);
        } else {
          window.localStorage.removeItem('jwt');
        }
      }
    )
  }

  @observable token: string | null = window.localStorage.getItem('jwt');
  @observable appLoaded = false;

  @observable user: any | null = null;

  @computed get isLoggedin() { return !!this.user };

  @action setToken = (token: string | null) => {
    this.token = token;
  }

  @action setAppLoaded = () => {
    this.appLoaded = true;
  }

  @action login = async () => {
    try {
      const user = await agent.Token.get();
      console.log(user);
      runInAction(() => {
        this.user = user;
      })
      // this.setToken(user);
      this.rootStore.modalStore.closeModal();
      history.push('/dashboard');
    } catch (error) {
      throw error;
    }
  }
}