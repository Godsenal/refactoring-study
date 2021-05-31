enum EmployeeType {
  Engineer = "engineer",
  Manager = "manager",
  Salesperson = "salesperson",
}

class Employees {
  _name: string;
  constructor(name: string) {
    this._name = name;
  }
}

class Engineer extends Employees {}

class Salesperson extends Employees {}

class Manager extends Employees {}

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
