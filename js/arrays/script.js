

//input: none
//output: number
const numberList1 = [1, 2, 3, 4, 5];
console.log('BEFORE POP', numberList1);
const popResult = numberList1.pop();
console.log(popResult);
console.log('AFTER POP', numberList1);

//input: number (any type)
//output: number (new length)
const numberList2 = [1, 2, 3, 4, 5];
console.log('BEFORE PUSH', numberList2);
const pushResult = numberList2.push('hello');
console.log(pushResult);
console.log('AFTER PUSH', numberList2);

//input: number (any type)
//output: number (new length)
const numberList3 = [1, 2, 3, 4, 5];
console.log('BEFORE UNSHIFT', numberList3);
const unshiftResult = numberList3.unshift('hello');
console.log(pushResult);
console.log('AFTER UNSHIFT', numberList3);



//filter 
const anotherNumberList = [5, 0, 8, 10, -4, 50, 220];

//input callback
//output array

//callback 
//input el, ind, arr
//output bool

// function filterCallback(num) {
//   return num > 5;
// }
// let filterRes = anotherNumberList.filter(filterCallback);

const filterRes = anotherNumberList.filter(el => el > 100);

console.log(filterRes);

