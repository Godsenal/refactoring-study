const organization = { name: "삼성", country: "KR" };

const getRawDataOfOrganization = () => {
  return organization;
};

const result = `<h1>${getRawDataOfOrganization().name}</h1>`;
getRawDataOfOrganization().name = "엘지";
