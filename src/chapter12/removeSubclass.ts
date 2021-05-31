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

const loadFromInput = (data) => {
  const result = [];
  data.forEach((aRecord) => {
    let p;
    switch (aRecord.gender) {
      case "M":
        p = new Male(aRecord.name);
        break;
      case "F":
        p = new FeMale(aRecord.name);
        break;
      default:
        p = new Person(aRecord.name);
    }

    result.push(p);
  });
  return result;
};

const isMale = (aPerson) => aPerson instanceof Male;
const numberOfMales = (data) => data.filter((p) => isMale(p)).length;
