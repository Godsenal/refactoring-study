import example from "./EncapsulateVariable";

it("변수 캡슐화 테스트", () => {
  const space = { owner: null };

  example(space);

  expect(space.owner).toStrictEqual({ firstName: "마틴", lastName: "파울러" });
});
