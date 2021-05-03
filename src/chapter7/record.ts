type TData = { name: string; country: string };

class Organization {
  _data: TData;
  constructor(data) {
    this._data = data;
  }

  get name() {
    return this._data.name;
  }

  set name(name: TData["name"]) {
    this._data.name = name;
  }
}

const organization = new Organization({ name: "삼성", country: "KR" });

const getRawDataOfOrganization = () => {
  return organization._data;
};

const getOrganization = () => organization;

const result = `<h1>${getOrganization().name}</h1>`;
getOrganization().name = "엘지";
