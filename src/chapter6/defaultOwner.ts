let defaultOwnerData = { firstName: "마틴", lastName: "파울러" };

export const defaultOwner = () => new Person(defaultOwnerData);
export const setDefaultOwner = (arg: typeof defaultOwnerData) =>
  (defaultOwnerData = arg);

export class Person {
  private _lastName;
  private _firstName;
  constructor(data) {
    this._lastName = data.lastName;
    this._firstName = data.firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get firstName() {
    return this._firstName;
  }
}
