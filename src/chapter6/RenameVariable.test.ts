import { result, obj, tpHd } from "./RenameVariable";

it("변수 이름 바꾸기", () => {
  expect(result).toBe("<h1>untitled</h1>");
  expect(tpHd).toBe(obj.articleTitle);
});
