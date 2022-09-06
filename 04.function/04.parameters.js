/*
    @ Function parameters
        # Reference
            + Function parameters : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions#function_parameters
*/

// Default parameters
// The arguments object
function sum(a = 0, b = 0) {
  console.log('a :', a);
  console.log('b :', b);
  console.log('arguments :', arguments);

  return a + b;
}

// [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
console.log(sum(1, 2, 3, 4, 5));

// Rest parameters
function inputNumber(a, b, ...numbers) {
  console.log('a :', a);
  console.log('b :', b);
  console.log('arguments :', arguments);
  console.log('numbers :', numbers);
}

// a : 1
// b : 2
// arguments : [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
// numbers : [ 3, 4, 5 ]
inputNumber(1, 2, 3, 4, 5);
