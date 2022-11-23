//input: obj
//output: obj[]

// algo
// 1. create result array
// 2. get keys/values (.entries)
// 3. add new id key to value => new obj
// 4. push to the arr (.map)
// 5. sort objs by age (.sort)

//DRAFT
// const getCustomersList = (obj) => {
//     const resArr = [];
//     const entries = Object.entries(obj);
//     console.log(entries);

//   for (let index = 0; index < entries.length; index++) {
//       // 1.get key and value from entries
//       // 2.add new id key to value
//       // 3.push to arr
//     // const entry = entries[index];
//     // const key = entry[0];
//     // const value = entry[1];

//     // const resObj = { ...value, id: key };
//     // resArr.push(resObj);
//       resArr.push({ ...entries[index][1], id: entries[index][0] });
//   }
//   resArr.sort((a, b) => a.age - b.age);
//   console.log(resArr);

//   return resArr;
// }

//FINAL
const getCustomersList = (obj) => 
    Object.entries(obj)
        .map(([key, value]) => ({ ...value, id: key }))
        .sort((a, b) => a.age - b.age);


//test data
const customers = {
    'customer-id-1': {
        name: 'William',
        age: 54,
    },
    'customer-id-2': {
        name: 'Tom',
        age: 20,
    },
    'customer-id-3': {
        name: 'Bob',
        age: 17,
    },
    'customer-id-4': {
        name: 'John',
        age: '22',
    },
};
console.log(getCustomersList(customers));
