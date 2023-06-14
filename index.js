// Lab 1
const sameElement = (arr1 = [], arr2 = []) => {
  let arr = [];
  let arr3;
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

const findElement = (arrSum = [], sum) => {
  let result = [];
  for (let i = 0; i < arrSum.length; i++) {
    for (let j = 0; j < arrSum.length; j++) {
      if (arrSum[i] + arrSum[j + 1] === sum) {
        result.push(arrSum[i], arrSum[j + 1]);
        break;
      }
    }
    
  }
  console.log(result);
  return result;
};
let arrSum = [1, 7, 9, 2, 5, 3, 8];
findElement(arrSum, 10);
