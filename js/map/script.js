
const mapArrayElements = (arr, callback) => {
  const resultArr = [];
  for (let index = 0; index < arr.length; index++) {
    resultArr.push(callback(arr[index], index, arr));
  }
  return resultArr;
};


const arr = [1, 2, 3, 4];
const func = (el, index, arr) => el * 2;

console.log(mapArrayElements(arr, func));