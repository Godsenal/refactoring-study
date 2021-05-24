class Employee {
  seniority!: number;
  monthsDisabled!: number;
  isPartTime!: number;
}

const employee = new Employee();

function disabilityAmount() {
  if (isNotEligibleForDisability()) return 0;

  // 나머지
}
function isNotEligibleForDisability() {
  return (
    employee.seniority < 2 ||
    employee.monthsDisabled > 12 ||
    employee.isPartTime
  );
}
