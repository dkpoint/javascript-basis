/*
    @ if
        # Reference
            + if : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
*/

// Conditional Statement

let fruit = 'apple';
console.log(fruit === 'apple');

if (fruit === 'apple') {
  console.log('🍎');
} else if (fruit === 'orange') {
  console.log('🍊');
} else {
  console.log('??');
}

let undefinedVariable;
console.log(undefinedVariable);
if (undefinedVariable) console.log('undefinedVariable');

let valueIsNull = null;
console.log(valueIsNull);
if (valueIsNull) console.log(valueIsNull);

if (2 > 1) {
  console.log('2 > 1');
}
