/*
    @ Callback Function
        # Reference
            + Callback Function : https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
*/

// Callback Function
const add = (number1, number2) => number1 + number2;
const multiply = (number1, number2) => number1 * number2;

// Higher-order function
function calculate(number1, number2, callback) {
  if (number1 < 0 || number2 < 0) {
    return;
  }

  let result = callback(number1, number2);

  return result;
}

console.log(calculate(2, 3, add));

console.log(calculate(1, 3, multiply));
