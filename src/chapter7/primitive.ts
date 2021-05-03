class Priority {
  _value: string;
  constructor(value) {
    this._value = value;
  }
  toString() {
    return this._value;
  }
}

class Order {
  _priority: Priority;
  constructor(data) {
    this._priority = data.priority;
  }

  get priority() {
    return this._priority.toString();
  }
  set priority(aString) {
    this._priority = new Priority(aString);
  }
}

const orders = [
  new Order({ priority: "high" }),
  new Order({ priority: "rush" }),
];

const highPriorityCount = orders.filter(
  (o) => o.priority === "high" || o.priority === "rush"
).length;
