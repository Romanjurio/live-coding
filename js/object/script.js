//input: obj, string, string
//output: obj
function addPropertyV1(obj, key, value) {
    obj[key] = value;
    return obj;
}

function addPropertyV2(obj, key, value) {
    //input: target obj, ...sourceObj
    //output: obj
    return Object.assign(obj, { [key]: value });
}

function addPropertyV3(obj, key, value) {
    return Object.assign({}, obj, { [key]: value });
}

function addPropertyV4(obj, key, value) {
    return {
        ...obj,
        [key]: value,
    };
}

// examples
const transaction = {
    value: 170,
};

// console.log(addPropertyV1(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
// console.log(transaction);
// console.log(addPropertyV1(transaction, 'currency', 'EUR'));

const obj1 = {};
console.log('before', obj1);
console.log(addPropertyV1(obj1, 'name', 'Vasya'));
console.log('after', obj1);

const obj2 = { name: 'Anna' };
console.log('before', obj2);
console.log(addPropertyV2(obj2, 'age', 16));
console.log('after', obj2);
console.log(addPropertyV2(obj2, 'name', 'Olena'));
console.log('after', obj2);

const obj3 = { name: 'Roman' };
console.log('before', obj3);
console.log(addPropertyV3(obj3, 'age', 23));
console.log('after ', obj3);
console.log(addPropertyV3(obj3, 'name', 'Andriy'));
console.log('after ', obj3);

const obj4 = { name: 'John' };
console.log('before', obj4);
console.log(addPropertyV4(obj4, 'age', 25));
console.log('after ', obj4);
console.log(addPropertyV4(obj4, 'name', 'Ivan'));
console.log('after ', obj4);

// console.log(addPropertyV3(transaction, 'amount', 1000));
// console.log(transaction);

// console.log(addPropertyV4(transaction, 'cardholder', 'Ivan'));

//rest operator
function sum(...args) {
    console.log(args);
}

sum(1, 34, 3, 21);

const userObj = {
    name: 'Jane',
    balance: 100,
    city: 'Kyiv',
};

const { name, ...obj } = userObj;
console.log(obj);

const arr = [1, 5, 10, -77];
const [num1, num2, ...newArr] = arr;
console.log(newArr);
