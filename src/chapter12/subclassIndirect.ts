class EmployeesType {
  toString() {}
}

class Engineer extends EmployeesType {
  toString() {
    return EmployeeType.Engineer;
  }
}

class Manager extends EmployeesType {
  toString() {
    return EmployeeType.Manager;
  }
}

class Salesperson extends EmployeesType {
  toString() {
    return EmployeeType.Salesperson;
  }
}

class Employees {
  _name: string;
  _type: EmployeesType;
  constructor(name: string, type: EmployeeType) {
    this.validateType(type);
    this._name = name;
    this.type = type;
  }
  get typeString() {
    return this.type.toString();
  }
  get type() {
    return this._type;
  }
  set type(arg: EmployeeType) {
    this._type = Employees.createEmployee(arg);
  }
  get capitalizedType() {
    return (
      this.typeString.charAt(0).toUpperCase() +
      this.typeString.substr(1).toLowerCase()
    );
  }
  validateType(arg: string) {
    if (!Object.values(EmployeeType).includes(arg as EmployeeType)) {
      throw new Error(`${arg}라는 직원 유형은 없습니다.`);
    }
  }
  toString() {
    return `${this._name} (${this.capitalizedType})`;
  }
  static createEmployee(type: EmployeeType) {
    switch (type) {
      case EmployeeType.Engineer: {
        return new Engineer();
      }
      case EmployeeType.Salesperson: {
        return new Salesperson();
      }
      case EmployeeType.Manager: {
        return new Manager();
      }
      default:
        throw new Error(`${type}라는 직원 유형은 없습니다.`);
    }
  }
}
