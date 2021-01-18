import { RootStore } from './rootStore';
import { action, makeObservable, observable, runInAction } from "mobx";
import agent from '../api/agent';
import { IPhoto } from '../models/photo';

export default class PhotoStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this);
  }

  @observable uploadingPhoto = false;
  @observable loading = false;

  @action uploadPhoto = async (file: Blob) => {
    this.uploadingPhoto = true;
    console.log(file)
    try {
      const photo = await agent.Photos.uploadPhoto(file);
      runInAction(() => {
        console.log(photo)
        this.uploadingPhoto = false;
      });
    } catch (error) {
      console.log(error);
      console.log('Problem uploading photo');
      runInAction(() => {
        this.uploadingPhoto = false;
      });
    }
  }

  @action deletePhoto = async (photo: IPhoto) => {
    this.loading = true;
    try {
      await agent.Photos.deletePhoto(photo.id);
      runInAction(() => {
        this.loading = false;
      })
    } catch (error) {
      console.log('Problem deleting the photo');
      runInAction(() => {
        this.loading = false;
      })
    }
  }
}