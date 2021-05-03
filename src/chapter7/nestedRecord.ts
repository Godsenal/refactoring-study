type TCustomerData = {
  [key: string]: {
    name: string;
    id: string;
    usages: {
      [key: string]: {
        [key: string]: number;
      };
    };
  };
};

class CustomerData {
  _data: TCustomerData;
  constructor(data: TCustomerData) {
    this._data = data;
  }

  setUsage(customerID: string, year: number, mount: number, amount: number) {
    this._data[customerID].usages[year][month] = amount;
  }
}

let customerData = new CustomerData({
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
});

const getCustomerData = () => customerData;
const getRawDataOfCustomers = () => customerData._data;
const setRawDataOfCustomers = (args) => (customerData = new CustomerData(args));

const customerID = "1920";
const year = 2016;
const month = 2;

const newAmount = 30;

getCustomerData().setUsage(customerID, year, month, newAmount);
const compareUsage = (customerID: string, laterYear: number, month: number) => {
  const later = getRawDataOfCustomers()[customerID].usages[laterYear][month];
  const earlier = getRawDataOfCustomers()[customerID].usages[laterYear - 1][
    month
  ];

  return { laterAmount: later, change: later - earlier };
};
