enum EmployeeType {
  Engineer = "engineer",
  Manager = "manager",
  Salesperson = "salesperson",
}

class Employees {
  _name: string;
  _type: string;
  constructor(name: string, type: EmployeeType) {
    this.validateType(type);
    this._name = name;
    this._type = type;
  }
  validateType(arg: string) {
    if (!Object.values(EmployeeType).includes(arg as EmployeeType)) {
      throw new Error(`${arg}라는 직원 유형은 없습니다.`);
    }
  }
  toString() {
    return `${this._name} (${this._type})`;
  }
}
