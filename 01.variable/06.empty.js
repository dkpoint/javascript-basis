/*
    @ Empty
        # Reference
            + Undefined : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined
            + Null : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null
*/

function test(t) {
  if (t === undefined) {
    return 'Undefined value!';
  }
  return t;
}

let x;

console.log(test(x)); // expected output: "Undefined value!"
console.log('type of undefined :', typeof x);

let y;
y = null;

console.log(y);
console.log('type of null :', typeof y);
