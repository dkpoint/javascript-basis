/*
    @ Higher-order function
        # Reference
            + First-class_Function : https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function
            + Array.prototype.forEach() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
            + Array.prototype.find() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
            + Array.prototype.findIndex() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
            + Array.prototype.some() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
            + Array.prototype.every() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
            + Array.prototype.filter() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
            + Array.prototype.sort() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
            + Array.prototype.reduce() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
            + Array.prototype.map() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
            + Array.prototype.flatMap() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
*/

const emoji = ['⭐️', '🌛', '🌕'];

emoji.forEach((value) => {
  console.log(value);
});
// ⭐️
// 🌛
// 🌕

const flower = [];
const rose = { name: 'rose', color: 'red', price: 2 };
const lily = { name: 'lily', color: 'white', price: 1 };
const tulip = { name: 'tulip', color: 'red', price: 1 };
flower.push(rose);
flower.push(lily);
flower.push(tulip);

let result = flower.find((item) => item.name === 'rose');
console.log(result); // { name: 'rose', color: 'red', price: 2 }

result = flower.findIndex((item) => item.name === 'tulip');
console.log(result); // 2

result = flower.some((item) => item.price < 2);
console.log(result); // true

result = flower.every((item) => item.price < 2);
console.log(result); // false

result = flower.filter((item) => item.color === 'red');
console.log(result); // [ { name: 'rose', color: 'red', price: 2 }, { name: 'tulip', color: 'red', price: 1 } ]

const number = [0, 10, 5, 2, 4];
number.sort((a, b) => a - b);
console.log(number); // [ 0, 2, 4, 5, 10 ]

result = [1, 2, 3].reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  (initialValue = 10)
);
console.log(result); // 16

result = number.map((item) => item + 1);
console.log(result); // [ 1, 3, 5, 6, 11 ]

result = number.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result); // [ 0, 4, 8, 5, 20 ]

result = ['Hi~', 'Good to see you!'].flatMap((item) => item.split(' '));
console.log(result); // [ 'Hi~', 'Good', 'to', 'see', 'you!' ]
