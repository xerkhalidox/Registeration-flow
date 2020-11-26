class StateManager {
  set FirstName(firstName) {
    this.firstName = firstName;
  }
  set FastName(firstName) {
    this.firstName = firstName;
  }
  get Name() {
    if (this.firstName && this.lastName) {
      return this.firstName + ' ' + this.lastName;
    } else {
      return 'Error';
    }
  }
  set Email(email) {
    this.email = email;
  }
  get Email() {
    return this.email;
  }
  set Day(day) {
    this.day = day;
  }
  set Month(month) {
    this.month = month;
  }
  set Year(year) {
    this.year = year;
  }
  get BirthDate() {
    if (this.day && this.month && this.year) {
      return this.day + '/' + this.month + '/' + this.year;
    } else {
      return 'Error';
    }
  }
  set Gender(gender) {
    this.gender = gender;
  }
  get Gender() {
    return this.gender;
  }
  set PhoneNumber(phoneNumber) {
    this.phoneNumber = phoneNumber;
  }
  get PhoneNumber() {
    return this.phoneNumber;
  }
}
export default new StateManager();
