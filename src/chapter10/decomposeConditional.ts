class SomeDate {
  isBefore(date: SomeDate) {
    return true;
  }
  isAfter(date: SomeDate) {
    return false;
  }
}

class Plan {
  summerStart!: SomeDate;
  summerEnd!: SomeDate;
  summerRate!: number;
  regularRate!: number;
  regularServiceCharge!: number;
}

const date = new SomeDate();
const plan = new Plan();

const quantity = 10;
let charge;

if (summer()) {
  charge = summerCharge();
} else {
  charge = regularCharge();
}
function regularCharge(): any {
  return quantity * plan.regularRate + plan.regularServiceCharge;
}

function summerCharge(): any {
  return quantity * plan.summerRate;
}

function summer() {
  return !date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd);
}
