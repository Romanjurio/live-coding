// input: arr, callback;
// out: arr;

//input: el, index, arr
//output: boolean

//algo
//0. create result arr
//1. iterate array - loop for
//2. call callback for each el
//3. if callback - true => push el
//4. return res arr
const filterArrayElements = (arr, callback) => {
    const resultArr = [];
  for (let index = 0; index < arr.length; index++) {
    const el = arr[index];
      if (callback(el, index, arr)) {
        resultArr.push(el);
      }
    }
    return resultArr;
};

// test data
const arr = [1, 222, 5, 10, 77];
// const func = (el, index, arr) => {
//   if(index > 2 && el > 5) {
//     return true;
//   }
//     return false;
// }
const func = (el, index, arr) => index > 2 && el > 5;
console.log(filterArrayElements(arr, func));

console.log(
    filterArrayElements(['Andrew', 'Ivan', 'Jack', 'Jane', 'Mortal'], (el) =>
        el.toLowerCase().includes('an')
    )
);
