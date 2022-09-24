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
