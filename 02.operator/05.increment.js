/*
    @ Increment and Decrement operators
        # Reference
            + Increment and Decrement : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#increment_and_decrement
*/

let number = 0;
number++;
console.log(number);

number--;
console.log(number);

number = 0;
let prefix_increment = ++number;
console.log('prefix_increment :', prefix_increment);
console.log('number', number);

number = 0;
let prefix_decrement = --number;
console.log('prefix_decrement :', prefix_decrement);
console.log('number', number);

number = 0;
let postfix_increment = number++;
console.log('postfix_increment :', postfix_increment);
console.log('number', number);

number = 0;
let postfix_decrement = number--;
console.log('postfix_decrement :', postfix_decrement);
console.log('number', number);
