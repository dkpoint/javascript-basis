/*
    @ Number
        # Reference
            Number : developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
            BigInt : developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
*/

let integer = 123; // 정수
let negative = -123; // 음수
let double = 1.23; // 실수

console.log(integer);
console.log(negative);
console.log(double);

let binary = 0b1111011; // 2진수
let octal = 0o173; // 8진수
let hexa = 0x7b; // 16진수
console.log(binary);
console.log(octal);
console.log(hexa);

console.log(0 / 123); // 0
console.log(123 / 0); // Infinity
console.log(123 / -0); // -Infinity
console.log(123 / 'text'); // NaN(Not a Number)

let bigInt = 12345678901234567890n; // BigInt
console.log(bigInt);
