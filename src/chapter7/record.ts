type TData = { name: string; country: string };

class Organization {
  _name: TData["name"];
  _country: TData["country"];
  constructor(data: TData) {
    this._name = data.name;
    this._country = data.country;
  }

  get name() {
    return this._name;
  }

  set name(name: TData["name"]) {
    this._name = name;
  }
}

const organization = new Organization({ name: "삼성", country: "KR" });

const getOrganization = () => organization;

const result = `<h1>${getOrganization().name}</h1>`;
getOrganization().name = "엘지";
