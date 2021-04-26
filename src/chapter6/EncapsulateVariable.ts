import { getDefaultOwner, setDefaultOwner } from "./defaultOwner";

const example = (spaceship: { owner: any }) => {
  spaceship.owner = getDefaultOwner();

  setDefaultOwner({ firstName: "레베카", lastName: "파슨스" });
};

export default example;
