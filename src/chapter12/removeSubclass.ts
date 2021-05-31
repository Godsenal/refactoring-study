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
  get isMale() {
    return this instanceof Male;
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
      return new Male(aRecord.name);
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
