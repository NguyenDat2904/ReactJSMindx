// Lab 1
const sameElement = (arr1 = [], arr2 = []) => {
  let arr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        arr.push(arr1[i]);
        break;
      }
    }
  }
  return arr;
};
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [3, 4, 8, 9, 12, 5];
sameElement(arr1, arr2);
// console.log(sameElement(arr1, arr2));

// Lab 2

const greatest = (arrRandom = []) => {
  let arrGreatest = [];
  for (let i = 0; i < arrRandom.length; i++) {
    for (let j = 0; j < arrRandom.length - i - 1; j++) {
      if (arrRandom[j] < arrRandom[j + 1]) {
        [arrRandom[j], arrRandom[j + 1]] = [arrRandom[j + 1], arrRandom[j]];
      }
    }
  }
  arrGreatest.push(arrRandom[0], arrRandom[1]);
  return arrGreatest;
};
let arrRandom = [1, 7, 9, 2, 5, 3, 8];
greatest(arrRandom);

// Lab 3

const findPairs = (arrSum = [], sum) => {
  let result = [];
  let foundValues = {};
  for (let i = 0; i < arrSum.length; i++) {
    let target = sum - arrSum[i];
    if (foundValues[target] !== undefined && !foundValues[target]) {
      result.push([arrSum[i], target]);
      foundValues[arrSum[i]] = true;
    } else {
      foundValues[arrSum[i]] = false;
    }
  }
  // console.log(foundValues);
  return result;
};

let arrSum = [1, 7, 9, 2, 5, 3, 8];
let pairs = findPairs(arrSum, 10);
// console.log(pairs);

// Lab 4
const arrOnlyOnce = (only) => {
  return [...new Set(only)];
};

const arrOnly = (only = []) => {
  let result = [];
  for (let i = 0; i < only.length; i++) {
    if (result.indexOf(only[i]) === -1) {
      result.push(only[i]);
    }
  }
  // console.log(result);
  return result;
};
let only = [1, 2, 3, 1, 2, 3, 4, 5, 6, 4];
arrOnly(only);

// Lab 5

const arrDuplicate = (duplicate_1 = [], duplicate_2 = []) => {
  let result = [];
  for (let item_1 of duplicate_1) {
    for (let item_2 of duplicate_2) {
      if (item_1 === item_2 && result.indexOf(item_1) === -1) {
        result.push(item_1);
      }
    }
  }

  // console.log(result);
  return result;
};

const duplicate_1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
const duplicate_2 = [3, 5, 9, 10, 88];
arrDuplicate(duplicate_1, duplicate_2);

// Lab 6

const arrMy = [1, 2, 3, 4, 2, 3, 5, 3, 1, 1, 5, 2, 3];
const myFunc = (inputArr) => {
  let result = [];
  for (let i = 0; i < inputArr.length; i++) {
    for (let j = i + 1; j < inputArr.length; j++) {
      if (inputArr[i] === inputArr[j] && result.indexOf(inputArr[i]) === -1) {
        result.push(inputArr[i]);
      }
    }
  }
  // console.log(result);
  return result;
  // write your code here
};
const arrMy_2 = myFunc(arrMy);

// Lab 7

const arrApp = ["face", "zalo", "face", "gmail", "zalo", "zalo"];
const myApp = (arrApp) => {
  const result = {};
  for (let item_1 of arrApp) {
    let count = 0;
    for (let item_2 of arrApp) {
      if (item_1 === item_2) {
        count++;
        result[item_1] = count;
      }
    }
  }
  // console.log(result);
  return result;
};

myApp(arrApp);

// Lab 8

const arrCar = [
  { make: "audi", model: "r8", year: "2012" },
  { make: "audi", model: "rs5", year: "2013" },
  { make: "ford", model: "mustang", year: "2012" },
  { make: "ford", model: "fusion", year: "2015" },
  { make: "kia", model: "optima", year: "2012" },
];

const myCar = (make, arrCar) => {
  let result = {};
  for (let item of arrCar) {
    if (make === item.make) {
      if (result[make]) {
        result[make].push(item);
      } else {
        result[make] = [item];
      }
    }
  }

  // console.log(result);
  return result;
};
myCar("audi", arrCar);

// Lab 9

const order = {
  cart: [
    { id: 1, name: "ao dai", amount: 5, price: 100000 },
    { id: 2, name: "ao coc", amount: 2, price: 200000 },
    { id: 3, name: "quan dai", amount: 3, price: 150000 },
    { id: 4, name: "quan coc", amount: 4, price: 130000 },
  ],
  customer: "Name",
  address: "12 Giai Phong Street",
};

const myOrder = (order) => {
  let totalLyMoney = 0;
  let totalOfAmount = 0;
  for (let item in order) {
    if (typeof order[item] === "object")
      for (let item_1 in order[item]) {
        totalOfAmount += order[item][item_1].amount;
        totalLyMoney += order[item][item_1].price;
      }
  }
  // console.log("Tổng số lượng: ", totalOfAmount);
  // console.log("Tổng số tiền: ", totalLyMoney);
};
myOrder(order);

// Lab 10

// Lab 11

const deps = {
  data01: [1, 2, 3, [12, 323]],
  data02: [5, 8, 12],
  data03: [5, 14, 79],
  data04: [3, 64, 105],
};

const myDeps = () => {
  let result = [];

  for (let item of Object.values(deps)) {
    for (let subitem of item) {
      if (Array.isArray(subitem)) {
        result = result.concat(subitem);
      } else if (!result.includes(subitem)) {
        result.push(subitem);
      }
    }
  }

  console.log(result);
  return result;
};

myDeps(deps);
