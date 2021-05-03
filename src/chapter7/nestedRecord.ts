const customerData = {
  "1920": {
    name: "마틴 파울러",
    id: "1920",
    usages: {
      "2016": {
        "1": 50,
        "2": 55,
      },
      "2015": {
        "1": 70,
        "2": 63,
      },
    },
  },
  "38673": {
    name: "닐 포드",
    id: "38673",
    usages: {
      "2016": {
        "1": 30,
        "2": 24,
      },
      "2015": {
        "1": 55,
        "2": 47,
      },
    },
  },
};

const customerID = "1920";
const year = 2016;
const month = 2;

const newAmount = 30;

customerData[customerID].usages[year][month] = newAmount;
const compareUsage = (
  customerID: keyof typeof customerData,
  laterYear: number,
  month: number
) => {
  const later = customerData[customerID].usages[laterYear][month];
  const earlier = customerData[customerID].usages[laterYear - 1][month];

  return { laterAmount: later, change: later - earlier };
};
