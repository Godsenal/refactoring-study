enum EmployeeType {
  Engineer = "engineer",
  Manager = "manager",
  Salesperson = "salesperson",
}

class Employees {
  _name: string;
  private _type: string;
  public get type(): string {
    return this._type;
  }
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
    return `${this._name} (${this.type})`;
  }
}

class Engineer extends Employees {
  get type() {
    return EmployeeType.Engineer;
  }
}

class Salesperson extends Employees {
  get type() {
    return EmployeeType.Salesperson;
  }
}

class Manager extends Employees {
  get type() {
    return EmployeeType.Manager;
  }
}

const createEmployee = (name: string, type: EmployeeType) => {
  switch (type) {
    case EmployeeType.Engineer: {
      return new Engineer(name, type);
    }
    case EmployeeType.Salesperson: {
      return new Salesperson(name, type);
    }
    case EmployeeType.Manager: {
      return new Manager(name, type);
    }
  }
  return new Employees(name, type);
};
