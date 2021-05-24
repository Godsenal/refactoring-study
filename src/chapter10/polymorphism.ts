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
  switch (bird.type) {
    case "europe": {
      return "노말";
    }
    case "africa": {
      return bird.numberOfCoconuts > 2 ? "지쳤다" : "보통이다";
    }
    case "norway": {
      return bird.voltage > 100 ? "그을렸다" : "예쁘다";
    }
    default:
      return "알 수 없다";
  }
}

function airSpeedVelocity(bird: typeof birds[number]) {
  switch (bird.type) {
    case "europe": {
      return 35;
    }
    case "africa": {
      return 40 - 2 * bird.numberOfCoconuts;
    }
    case "norway": {
      return bird.isNailed ? 0 : 10 + bird.voltage / 10;
    }
    default:
      return null;
  }
}
