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

if (!date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd)) {
  charge = quantity * plan.summerRate;
} else {
  charge = quantity * plan.regularRate + plan.regularServiceCharge;
}
