class Person {
  _name: string;
  constructor(name: string) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  get genderCode() {
    return "X";
  }
}

class Male extends Person {
  get genderCode() {
    return "M";
  }
}

class FeMale extends Person {
  get genderCode() {
    return "F";
  }
}
