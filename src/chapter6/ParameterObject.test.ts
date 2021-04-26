import { TReading, readingsOutsideRange, TStation } from "./ParameterObject";

describe("매개변수 객체 만들기 테스트", () => {
  it("온도 측정값 배열에서 정상 범위를 벗어난 측정값을 반환한다.", () => {
    const min = 10;
    const max = 20;
    const data: TStation = {
      name: "test",
      readings: [
        { temp: min - 1, time: "" },
        { temp: min, time: "" },
        { temp: max, time: "" },
        { temp: max + 1, time: "" },
      ],
    };

    expect(readingsOutsideRange(data, min, max)).toStrictEqual([
      data.readings[0],
      data.readings[3],
    ]);
  });
});
