function payAmount(employee: Employee) {
  let result;

  if (employee.isSeparated) {
    return { amount: 0, reasonCode: "SEP" };
  }
  if (employee.isRetired) {
    result = { amount: 0, reasonCode: "RET" };
  } else {
    // 급여 계산 로직
  }

  return result;
}
