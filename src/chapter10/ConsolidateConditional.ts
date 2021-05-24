class Employee {
  seniority!: number;
  monthsDisabled!: number;
  isPartTime!: number;
}

const employee = new Employee();

function disabilityAmount() {
  if (employee.seniority < 2 || employee.monthsDisabled > 12) return 0;
  if (employee.isPartTime) return 0;

  // 나머지
}
