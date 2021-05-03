class Organization {
  _data: { name: string; country: string };
  constructor(data) {
    this._data = data;
  }
}

const organization = new Organization({ name: "삼성", country: "KR" });

const getRawDataOfOrganization = () => {
  return organization._data;
};

const result = `<h1>${getRawDataOfOrganization().name}</h1>`;
getRawDataOfOrganization().name = "엘지";
