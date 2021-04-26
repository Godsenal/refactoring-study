export let defaultOwner = { firstName: "마틴", lastName: "파울러" };

const getDefaultOwner = () => defaultOwner;
const setDefaultOwner = (arg: typeof defaultOwner) => (defaultOwner = arg);

const example = (spaceship: { owner: any }) => {
  spaceship.owner = defaultOwner;

  defaultOwner = { firstName: "레베카", lastName: "파슨스" };
};

export default example;
