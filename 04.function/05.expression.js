/*
    @ Function expression
        # Reference
            + Function expression : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
*/

const add = function (a, b) {
  return a + b;
};

console.log(add(2, 3));

let sum = (a, b) => {
  return a + b;
};

console.log(sum(3, 4));

sum = (x, y) => x + y;

console.log(sum(3, 4));
