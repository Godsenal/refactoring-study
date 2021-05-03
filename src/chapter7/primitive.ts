class Priority {
  _value!: string;
  constructor(value) {
    if (value instanceof Priority) return value;
    if (Priority.legalValues().includes(value)) {
      this._value = value;
    } else {
      throw new Error(`<${value}> is invalid for Priority`);
    }
  }
  toString() {
    return this._value;
  }
  get _index() {
    return Priority.legalValues().findIndex((s) => s === this._value);
  }
  static legalValues() {
    return ["low", "normal", "high", "rush"];
  }
  equals(other: Priority) {
    return this._index === other._index;
  }
  higherThen(other: Priority) {
    return this._index > other._index;
  }
  lowerThen(other: Priority) {
    return this._index < other._index;
  }
}

class Order {
  _priority: Priority;
  constructor(data) {
    this._priority = data.priority;
  }

  get priority() {
    return this._priority;
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

const highPriorityCount = orders.filter((o) =>
  o.priority.higherThen(new Priority("normal"))
).length;
