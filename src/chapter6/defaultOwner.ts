let defaultOwner = { firstName: "마틴", lastName: "파울러" };

export const getDefaultOwner = () => defaultOwner;
export const setDefaultOwner = (arg: typeof defaultOwner) =>
  (defaultOwner = arg);
