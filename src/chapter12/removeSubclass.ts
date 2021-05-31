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
    return this._genderCode;
  }
  get isMale() {
    return this._genderCode === "M";
  }
}

const createPerson = (aRecord) => {
  switch (aRecord.gender) {
    case "M":
      return new Person(aRecord.name, "M");
    case "F":
      return new Person(aRecord.name, "F");
    default:
      return new Person(aRecord.name, "X");
  }
};

const loadFromInput = (data) => {
  return data.map((aRecord) => createPerson(aRecord));
};

const numberOfMales = (data) => data.filter((p) => p.isMale).length;
