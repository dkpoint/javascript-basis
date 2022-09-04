/*
    @ Logical operator
        # Reference
            + Logical operators : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#binary_logical_operators
*/

let number = 12;
if (number % 2 === 0 && number > 10) {
  console.log('⭐️');
}

number = 33;
if (number % 2 === 0 || number > 10) {
  console.log('🌙');
}

number = 5;
if (!(number > 10)) {
  console.log('🍁');
}

console.log(true && true); // true

console.log(true && false); // false

console.log(true || false); // true

console.log(false || false); // false

console.log(!!'Hello'); // true

console.log(!!''); // false

console.log(!!null); // false
