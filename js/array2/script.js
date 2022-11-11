//map
const numberList = [5, 0, 8, 10, -4, 50, 220];

//input: callback
//output: array

//input: el , index, array
//output: new el
let mapRes = numberList.map((el) => (el < 0 ? el : el * el));
console.log(mapRes);

// find
//input: callback
//output: element || undefined

//callback
//input: el , index, array
//output: first el
const findRes = numberList.find((el) => el > 100);
console.log(findRes);


//forEach
//input: callback
//output: undefined

//callback
//input: el , index, array
//output: undefined
numberList.forEach(el => {
  if (el > 0) {
     console.log(el);
  } else {
    console.log('Error');
  }


//wrong using
// el > 0 ? console.log(el) : console.log('Error');;
//correct using
// console.log(el > 0 ? el : 'Error');
});

//ternary
// condition ? valueA : valueB;


//reduce
//input: callback, accInitValue (optional)
//output: result (any type)

//callback
//input: acc, el , index (optional), array(optional)
//output: result (any type)
const transactions = [5, 0, -50, -8, 10, -4, -50, 220, 1203, 556];

const res = transactions.reduce((acc, el) => {
  console.log('acc: ' + acc);
  console.log('el: ' + el);
  if (el < 0) {
    acc += el;
  }
  return acc;
}, 0);

console.log(res);

transactions.reduce((acc, el) => el < 0 ? acc + el : acc, 0);

console.log(res);