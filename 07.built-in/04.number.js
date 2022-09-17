/*
    @ Number
        # Reference
            + Number : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
*/

const number1 = 123;
const number2 = new Number(123);
console.log(typeof number1); // number
console.log(typeof number2); // object
console.log(Number.isNaN(number1)); // false

const number3 = 1004;
console.log(number3.toExponential()); // 1.004e+3

const number4 = 123.456789;
console.log(number4.toFixed()); // 123
console.log(number4.toPrecision(5)); // 123.46

const number5 = 0.1 + 0.2;
console.log(number5); // 0.30000000000000004
console.log(0.3 === number5); // false

const checkEqualNumber = (expectedNumber, checkNumber) => {
  return Math.abs(checkNumber - expectedNumber) < Number.EPSILON;
};

console.log(checkEqualNumber(0.3, number5)); // true
