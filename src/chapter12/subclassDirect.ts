enum EmployeeType {
  Engineer = "engineer",
  Manager = "manager",
  Salesperson = "salesperson",
}

class Employees {
  _name: string;
  public get type(): string {
    return "";
  }
  constructor(name: string) {
    this._name = name;
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
      return new Engineer(name);
    }
    case EmployeeType.Salesperson: {
      return new Salesperson(name);
    }
    case EmployeeType.Manager: {
      return new Manager(name);
    }
    default:
      throw new Error(`${type}라는 직원 유형은 없습니다.`);
  }
};
