describe("변수 캡슐화", () => {
  let defaultOwner;
  beforeEach(() => {
    jest.resetModules();
    defaultOwner = require("./defaultOwner").defaultOwner;
  });
  it("변수 캡슐화 테스트", () => {
    const space = { owner: null };

    require("./EncapsulateVariable").default(space);

    expect(space.owner).toStrictEqual({
      firstName: "마틴",
      lastName: "파울러",
    });
  });

  it("필드 직접 변경 테스트", () => {
    const owner1 = defaultOwner();
    expect(owner1.lastName).toBe("파울러");

    const owner2 = defaultOwner();
    owner2.lastName = "파슨스";
    expect(owner1.lastName).toBe("파울러");
  });
});
