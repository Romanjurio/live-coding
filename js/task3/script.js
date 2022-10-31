// How to work on tech tasks. Step by step guide

// 1. Learn requirement (WHAT?)
// 2. Create step by step algo (& input/output for functions) (HOW?)
// 3. Write draft solution & testing (CODE)
// 4. Refactoring & final testing -> final solution


//input Number;
//output undefined;

//algo
// 1. iterate from 2 to num;
// 2. check if number is prime
//   2.0 create counter
//   2.1 iterate 1 to number
//   2.2 if number % index === 0 -> count ++
//   2.3 if counter >= 2 -> is not prime
// 3. if prime -> console

function getPrimes(num) {
  console.log('NUM ', num);
  for (let number = 2; number <= num; number++) {
    console.log('CHECKING IF NUMBER IS PRIME ' + number);
    let counter = 0;

    for (let index = 1; index <= number; index++) {
      // console.log('STEP ' + index);
      if (number % index === 0) {
        console.log('COUNTER FOUND ' + index);
        counter++;
        }
    }

    console.log('FOR NUMBER ' + number + ' COUNTER FOUND ' + counter);

    if (counter === 2) {

      console.log(number);
    }
  }
}

// 10 => 2 3 5 7
// 15 => 2 3 5 7 11 13

// 8
// 1 .. 8
// 2 => 8 % 2 === 0 - if 
// 3
// 4..


//test data
getPrimes(10);
getPrimes(15);
getPrimes(11);