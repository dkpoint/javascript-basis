/*
    @ Symbol
        # Reference
            + Symbol : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
*/

const map = new Map([
  ['key1', '🍊'],
  ['key2', '🍎'],
]);

const emoji = new Map();
const key1 = 'star';
const key2 = 'star';
emoji.set(key1, '⭐');
console.log(key1 === key2); // true
console.log(emoji.get(key2)); // ⭐

const key3 = Symbol('moon');
const key4 = Symbol('moon');
emoji.set(key3, '🌕');
console.log(key3 === key4); // false
console.log(emoji.get(key4)); // undefined

// Global Symbol Registry
const key5 = Symbol.for('apple');
const key6 = Symbol.for('apple');
emoji.set(key5, '🍎');
console.log(key5 === key6); // true
console.log(emoji.get(key6)); // 🍎

console.log(Symbol.keyFor(key6)); // apple(Global Symbol Registry)
console.log(Symbol.keyFor(key3)); // undefined
