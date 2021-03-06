class Party {
  private _name: string;
  public get monthlyCost() {
    return 0;
  }
  public get name(): string {
    return this._name;
  }
  constructor(name: string) {
    this._name = name;
  }
  get annualCost() {
    // 총 연간 비용
    return this.monthlyCost * 12;
  }
}

class Employee extends Party {
  private _id: string;
  public get id(): string {
    return this._id;
  }
  private _monthlyCost: number;
  public get monthlyCost(): number {
    return this._monthlyCost;
  }
  constructor(name, id, monthlyCost) {
    super(name);
    this._id = id;
    this._monthlyCost = monthlyCost;
  }
}

class Department extends Party {
  private _staff: Employee[];
  public get staff(): Employee[] {
    return this._staff;
  }
  constructor(name: string, staff: string) {
    super(name);
    this._staff = staff;
  }

  get monthlyCost() {
    // 총 월간 비용
    return this.staff
      .map((e) => e.monthlyCost)
      .reduce((sum, cost) => sum + cost);
  }
  get headCount() {
    return this.staff.length;
  }
}
