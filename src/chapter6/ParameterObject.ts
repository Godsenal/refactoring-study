export type TReading = { temp: number; time: string };
export type TStation = { name: string; readings: TReading[] };

export class NumberRange {
  private _data;
  constructor(min, max) {
    this._data = { min, max };
  }
  get min() {
    return this._data.min;
  }
  get max() {
    return this._data.max;
  }
}

const stationData = {
  name: "ZB1",
  readings: [
    { temp: 47, time: "2016-11-10 09:10" },
    { temp: 53, time: "2016-11-10 09:20" },
    { temp: 58, time: "2016-11-10 09:30" },
    { temp: 53, time: "2016-11-10 09:40" },
    { temp: 45, time: "2016-11-10 09:50" },
  ],
};

export const readingsOutsideRange = (
  station: TStation,
  min: number,
  max: number,
  range?: NumberRange
) => station.readings.filter((r) => r.temp < min || r.temp > max);

const operatingPlan = {
  temperatureFloor: 52,
  temperatureCeiling: 54,
};

const range = new NumberRange(
  operatingPlan.temperatureCeiling,
  operatingPlan.temperatureCeiling
);

readingsOutsideRange(
  stationData,
  operatingPlan.temperatureFloor,
  operatingPlan.temperatureFloor,
  range
);
