import { defaultOwner, setDefaultOwner } from "./defaultOwner";

const example = (spaceship: { owner: any }) => {
  spaceship.owner = defaultOwner();

  setDefaultOwner({ firstName: "레베카", lastName: "파슨스" });
};

export default example;
