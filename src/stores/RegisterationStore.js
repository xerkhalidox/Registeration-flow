import {action, computed, observable} from 'mobx';

class RegisterationStore {
  @observable firstName = '';
  @observable lastName = '';
  @observable email = '';
  @observable gender = '';
  @observable day = 0;
  @observable month = 0;
  @observable year = 0;
  @observable phoneNumber = 0;
}

export default new RegisterationStore();
