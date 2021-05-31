class Employees {
  _name: string;
  _type: string;
  constructor(name: string, type: EmployeeType) {
    this.validateType(type);
    this._name = name;
    this._type = type;
  }
  get type() {
    return this._type;
  }
  set type(arg) {
    this._type = arg;
  }
  get capitalizedType() {
    return (
      this._type.charAt(0).toUpperCase() + this._type.substr(1).toLowerCase()
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
}
