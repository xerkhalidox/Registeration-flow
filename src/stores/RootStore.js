import RegisterationStoreInstance from './RegisterationStore';

class RootStore {
  constructor() {
    this.registerationStore = RegisterationStoreInstance;
  }
}

export default new RootStore();
