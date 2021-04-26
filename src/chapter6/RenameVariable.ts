let _title = "untitled";

const title = () => _title;
const setTitle = (arg: string) => (_title = arg);

export let result = `<h1>${title()}</h1>`;

export const obj = {
  articleTitle: "title",
};

setTitle(obj.articleTitle);

export { _title };
