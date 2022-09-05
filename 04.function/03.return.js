/*
    @ return
        # Reference
            + return : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return
*/

function printNumber(number) {
  if (typeof number !== 'number') {
    return;
  } else {
    console.log(number);
  }
}

printNumber(7);

const result = printNumber('string');
console.log(result); // undefined
