/*
    @ Scope
        # Reference
            + Scope : https://developer.mozilla.org/en-US/docs/Glossary/Scope
*/

function exampleFunction() {
  const x = 'declared inside function'; // x can only be used in exampleFunction
  console.log('Inside function');
  console.log(x);
}

// console.log(x); // Causes error, ReferenceError: x is not defined

function exampleFunction2() {
  console.log('Inside function');
  console.log(x);
}

const x = 'declared outside function';
exampleFunction();
// Inside function
// declared inside function

console.log('Outside function');
console.log(x);
// Outside function
// declared outside function
