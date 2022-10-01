/*
    @ Spread syntax (...)
        # Reference
            + Spread syntax : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
*/

function add(number1, number2, number3) {
  return number1 + number2 + number3;
}

const number = [1, 2, 3];
console.log(add(...number));

function printNumber(number1, ...numbers) {
  console.log(number1, numbers);
}

printNumber(0, 1, 2, 3, 4, 5);
// 0 [ 1, 2, 3, 4, 5 ]

const emoji1 = ['⭐️', '🌕'];
const emoji2 = ['🍊', '🍎'];
let emojiList = emoji1.concat(emoji2);
console.log(emojiList); // [ '⭐️', '🌕', '🍊', '🍎' ]

emojiList = [...emoji1, '🦁', ...emoji2];
console.log(emojiList); // [ '⭐️', '🌕', '🦁', '🍊', '🍎' ]

function makeEmployee(person, deptName) {
  return { ...person, dept: deptName };
}

const DK = { name: 'DK', mail: 'dkpoint.oh@gmail.com' };
let newEmployee = makeEmployee(DK, 'R&D');
console.log(newEmployee); // { name: 'Dk', mail: 'dkpoint.oh@gmail.com', dept: 'R&D' }
console.log(DK); // { name: 'Dk', mail: 'dkpoint.oh@gmail.com' }
