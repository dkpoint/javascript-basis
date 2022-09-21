/*
    @ Array method
        # Reference
            + Array static methods : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#static_methods
            + Array instance methods : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods
*/

const emoji = ['🍊', '❤️'];
console.log(emoji.length); // 2
console.log(emoji); // [ '🍊', '❤️' ]

emoji.push('🦁', '🛸');
console.log(emoji.length); // 4
console.log(emoji); // [ '🍊', '❤️', '🦁', '🛸' ]

emoji.unshift('🚨', '⭐');
console.log(emoji.length); // 6
console.log(emoji); // [ '🚨', '⭐', '🍊', '❤️', '🦁', '🛸' ]

let lastItem = emoji.pop();
console.log(emoji); // [ '🚨', '⭐', '🍊', '❤️', '🦁' ]
console.log(lastItem); // 🛸

let firstItem = emoji.shift();
console.log(emoji); // [ '⭐', '🍊', '❤️', '🦁' ]
console.log(firstItem); // 🚨

const deletedItem = emoji.splice(1, 1);
console.log(emoji); // [ '⭐', '❤️', '🦁' ]
console.log(deletedItem); // [ '🍊' ]

emoji.splice(1, 0, '🍎', '🍉');
console.log(emoji); // [ '⭐', '🍎', '🍉', '❤️', '🦁' ]

console.log(Array.isArray(emoji)); // true

console.log(Array.isArray({})); // false

console.log(
  Array.isArray(
    Array.from({
      0: '⭐',
      1: '❤️',
      length: 2,
    })
  )
); // true

console.log(emoji.includes('🦁')); // true
console.log(emoji.indexOf('🦁')); // 4

let sliceArray = emoji.slice(0, 2);
console.log(emoji); // [ '⭐', '🍎', '🍉', '❤️', '🦁' ]
console.log(sliceArray); // [ '⭐', '🍎' ]
sliceArray = emoji.slice();
console.log(sliceArray); // [ '⭐', '🍎', '🍉', '❤️', '🦁' ]
sliceArray = emoji.slice(-1);
console.log(sliceArray); // [ '🦁' ]

const numberArray1 = [1, 2, 3];
const numberArray2 = [4, 5];
const concatArray = numberArray1.concat(numberArray2);
console.log(concatArray); // [ 1, 2, 3, 4, 5 ]

const reverseArray = concatArray.reverse();
console.log(reverseArray); // [ 5, 4, 3, 2, 1 ]

let numberArray3 = [1, [2, [3, 4], 5]];
const flatArray = numberArray3.flat(3);
console.log(flatArray); // [ 1, 2, 3, 4, 5 ]

console.log(flatArray.fill(0)); // [ 0, 0, 0, 0, 0 ]
console.log(flatArray.fill(5, 4)); // [ 0, 0, 0, 0, 5 ]
console.log(flatArray.fill('A', 1)); // [ 0, 'A', 'A', 'A', 'A' ]
