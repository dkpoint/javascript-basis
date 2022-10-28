/*
    @ this
        # Reference
            + this : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
            + globalThis : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis
*/

console.log(globalThis);
globalThis.setInterval(() => console.log('sleep'), 3000);

console.log(globalThis.setInterval === setInterval); // true

console.log(globalThis.Array === Array); // true

const test = {
  prop: 42,
  func1: function () {
    console.log(this); // { prop: 42, func: [Function: func] }
    return this.prop;
  },
};

console.log(test.func1()); // 42

function func2() {
  'use strict'; // strict mode
  return this;
}

console.log(func2() === undefined); // true
