'use strict';

//create
//read
//modify obj
/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */

//algo
// 1. create empty obj
// 2. iterate keyList
// 3. add key/value to the obj
// 4. return obj

//DRAFT
// function buildObject(keysList, valuesList) {
//     const obj = {};

//     for (let index = 0; index < keysList.length; index++) {
//         obj[keysList[index]] = valuesList[index];
//     }
//     return obj;
// }

//FINAL
function buildObject(keysList, valuesList) {
  return keysList.reduce((obj, key, index) => ({...obj, [key]: valuesList[index]}), {});
}

// examples
const keys = [
    'name',
    'address',
    'age',
    'name',
    'city name',
    'start',
    'transactions',
];
const values = [
    'Bob',
    'Ukraine',
    34,
    'Jane',
    'New York',
    () => console.log('I am starting'),
    [21, 3124, 512, 1244],
];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
console.log(result);
result.start();
