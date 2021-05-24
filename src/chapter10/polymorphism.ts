const birds = [
  {
    type: "europe",
  },
  {
    type: "africa",
    numberOfCoconuts: 2,
  },
  {
    type: "norway",
    voltage: 120,
    isNailed: true,
  },
] as const;

function plumages(birds) {
  return new Map(birds.map((b) => [b.name, plumage(b)]));
}

function speeds(birds) {
  return new Map(birds.map((b) => [b.name, airSpeedVelocity(b)]));
}

function plumage(bird: typeof birds[number]) {
  return createBird(bird).plumage;
}

function airSpeedVelocity(bird: typeof birds[number]) {
  return createBird(bird).airSpeedVelocity;
}

function createBird(bird) {
  switch (bird.type) {
    case "europe": {
      return new EuropeanSwallow(bird);
    }
    case "africa": {
      return new AfricanSwallow(bird);
    }
    case "norway": {
      return new NorwegianBlueParrot(bird);
    }
    default:
      return new Bird(bird);
  }
}

class Bird {
  type!: string;
  numberOfCoconuts!: number;
  voltage!: number;
  isNailed!: boolean;

  constructor(bird) {
    Object.assign(this, bird);
  }

  get plumage() {
    switch (this.type) {
      case "europe": {
        return "노말";
      }
      case "africa": {
        return this.numberOfCoconuts > 2 ? "지쳤다" : "보통이다";
      }
      case "norway": {
        return this.voltage > 100 ? "그을렸다" : "예쁘다";
      }
      default:
        return "알 수 없다";
    }
  }

  get airSpeedVelocity() {
    switch (this.type) {
      case "europe": {
        return 35;
      }
      case "africa": {
        return 40 - 2 * this.numberOfCoconuts;
      }
      case "norway": {
        return this.isNailed ? 0 : 10 + this.voltage / 10;
      }
      default:
        return null;
    }
  }
}

class EuropeanSwallow extends Bird {}
class AfricanSwallow extends Bird {}
class NorwegianBlueParrot extends Bird {}
