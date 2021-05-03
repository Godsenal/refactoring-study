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

  get priorityString() {
    return this._priority.toString();
  }
  set priorityString(aString) {
    this._priority = new Priority(aString);
  }
}

const orders = [
  new Order({ priority: "high" }),
  new Order({ priority: "rush" }),
];

const highPriorityCount = orders.filter(
  (o) => o.priorityString === "high" || o.priorityString === "rush"
).length;
