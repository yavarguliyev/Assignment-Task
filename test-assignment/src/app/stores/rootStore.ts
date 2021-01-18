import { createContext } from 'react';
import { configure } from "mobx";
import ModalStore from './modalStore';
import CommonStore from './commonStore';
import PhotoStore from './photoStore';

configure({ enforceActions: "always" });

export class RootStore {
  modalStore: ModalStore;
  commonStrore: CommonStore;
  photoStore: PhotoStore;

  constructor() {
    this.modalStore = new ModalStore(this);
    this.commonStrore = new CommonStore(this);
    this.photoStore = new PhotoStore(this);
  }
}

export const RootStoreContext = createContext(new RootStore());