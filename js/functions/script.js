//func 1
function getSenseOfLife() {
    return 42;
}

const res = getSenseOfLife();
console.log(res);

console.log(getSenseOfLife());

//func 2
function getSquared(num) {
    return num ** 2;
}

// test data
console.log(getSquared(5));
console.log(getSquared(0));
console.log(getSquared(-7));
console.log(getSquared('3'));
console.log(getSquared('t'));
console.log(getSquared(undefined));

//func 3
function sum(firstNum, secondNum) {
    return firstNum + secondNum;
}
//test
console.log(sum(5, 3));
console.log(sum(-5, 3));
console.log(sum('he','llo'));
console.log(sum(5, '3'));
console.log(sum(5, 't'));

//func 4 
function getMessage(age) {
  if (age < 0 || typeof age !== 'number') {
    return null;
  }

  console.log(`I am ${age} years old`);
}

console.log(getMessage(-12));
console.log(getMessage(23));
console.log(getMessage(null));
console.log(getMessage(undefined));

//arrow func 
const mult = (firstNum, secondNum) => firstNum * secondNum;

console.log(mult(21, 2));
console.log(mult(21, -2));
console.log(mult('21', '2'));
console.log(mult('ds', 'dsa'));

//func 5 
const getMagicNumber = () => 17;

console.log(getMagicNumber(12));
console.log(getMagicNumber());
console.log(getMagicNumber('da'));
