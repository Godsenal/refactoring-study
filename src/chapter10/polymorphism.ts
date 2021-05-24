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
  return new Map(
    birds.map((b) => createBird(b)).map((bird) => [bird.name, bird.plumage])
  );
}

function speeds(birds) {
  return new Map(
    birds
      .map((b) => createBird(b))
      .map((bird) => [bird.name, bird.airSpeedVelocity])
  );
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

  get plumage(): string {
    return "알 수 없다";
  }

  get airSpeedVelocity(): number | null {
    return null;
  }
}

class EuropeanSwallow extends Bird {
  get plumage() {
    return "노말";
  }
  get airSpeedVelocity() {
    return 35;
  }
}
class AfricanSwallow extends Bird {
  get plumage() {
    return this.numberOfCoconuts > 2 ? "지쳤다" : "보통이다";
  }
  get airSpeedVelocity() {
    return 40 - 2 * this.numberOfCoconuts;
  }
}
class NorwegianBlueParrot extends Bird {
  get plumage() {
    return this.voltage > 100 ? "그을렸다" : "예쁘다";
  }
  get airSpeedVelocity() {
    return this.isNailed ? 0 : 10 + this.voltage / 10;
  }
}
