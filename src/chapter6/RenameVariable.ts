let tpHd = "untitled";

const title = () => tpHd;
const setTitle = (arg: string) => (tpHd = arg);

export let result = `<h1>${title()}</h1>`;

export const obj = {
  articleTitle: "title",
};

setTitle(obj.articleTitle);

export { tpHd };
