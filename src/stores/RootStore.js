import RegisterationStoreInstance from './RegisterationStore';

class RootStore {
  constructor() {
    this.RegisterationStore = RegisterationStoreInstance;
  }
}

export default new RootStore();
