class Employee {
  private _id: string;
  public get id(): string {
    return this._id;
  }
  private _name: string;
  public get name(): string {
    return this._name;
  }
  private _monthlyCost: number;
  public get monthlyCost(): number {
    return this._monthlyCost;
  }
  constructor(name, id, monthlyCost) {
    this._id = id;
    this._name = name;
    this._monthlyCost = monthlyCost;
  }

  get annualCost() {
    // 연간비용
    return this.monthlyCost * 12;
  }
}

class Department {
  private _name: string;
  public get name(): string {
    return this._name;
  }
  private _staff: Employee[];
  public get staff(): Employee[] {
    return this._staff;
  }
  constructor(name: string, staff: string) {
    this._name = name;
    this._staff = staff;
  }

  get totalMonthlyCost() {
    // 총 월간 비용
    return this.staff
      .map((e) => e.monthlyCost)
      .reduce((sum, cost) => sum + cost);
  }
  get headCount() {
    return this.staff.length;
  }
  get totalAnnualCost() {
    // 총 연간 비용
    return this.totalMonthlyCost * 12;
  }
}
