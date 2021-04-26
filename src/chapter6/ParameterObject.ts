export type TReading = { temp: number; time: string };
export type TStation = { name: string; readings: TReading[] };

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
  max: number
) => station.readings.filter((r) => r.temp < min || r.temp > max);

const operatingPlan = {
  temperatureFloor: 52,
  temperatureCeiling: 54,
};

readingsOutsideRange(
  stationData,
  operatingPlan.temperatureFloor,
  operatingPlan.temperatureFloor
);
