import { createContext } from 'react';
import { configure } from "mobx";
import ModalStore from './modalStore';
import CommonStore from './commonStore';

configure({ enforceActions: "always" });

export class RootStore {
  modalStore: ModalStore;
  commonStrore: CommonStore

  constructor() {
    this.modalStore = new ModalStore(this);
    this.commonStrore = new CommonStore(this)
  }
}

export const RootStoreContext = createContext(new RootStore());