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
