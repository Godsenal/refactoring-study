class Person {
  _name: string;
  _genderCode: string;
  constructor(name: string, genderCode: string) {
    this._name = name;
    this._genderCode = genderCode;
  }
  get name() {
    return this._name;
  }
  get genderCode() {
    return this._genderCode || "X";
  }
  get isMale() {
    return this._genderCode === "M";
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

const createPerson = (aRecord) => {
  switch (aRecord.gender) {
    case "M":
      return new Person(aRecord.name, "M");
    case "F":
      return new FeMale(aRecord.name);
    default:
      return new Person(aRecord.name);
  }
};

const loadFromInput = (data) => {
  return data.map((aRecord) => createPerson(aRecord));
};

const numberOfMales = (data) => data.filter((p) => p.isMale).length;
