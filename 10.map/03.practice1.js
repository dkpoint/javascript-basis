/*
    @ Practice 1
*/

function removeDulication(array) {
  return [...new Set(array)];
}

const emoji = ['⭐', '❤️', '⭐', '❤️', '🍉', '🍊', '🍊'];
console.log(removeDulication(emoji)); // [ '⭐', '❤️', '🍉', '🍊' ]

function findIntersetcion(item1, item2) {
  const array = [...item1].filter((item) => item2.has(item));
  return new Set(array);
}

const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 4, 5]);
console.log(...findIntersetcion(set1, set2)); // Set(1) { 3 }
