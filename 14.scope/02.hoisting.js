/*
    @ Hoisting
        # Reference
            + Hoisting : https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
*/

/*
  + Function hoisting
  The result of the code above is: function getStar()
*/
console.log(getStar()); // ⭐

function getStar() {
  return '⭐';
}

/*
  + let and const hoisting
  Throws ReferenceError exception as the variable value is uninitialized
*/
console.log(star); // ReferenceError: Cannot access 'star' before initialization
console.log(moon); // ReferenceError: Cannot access 'moon' before initialization

let star = '⭐';
const moon = '🌕';
