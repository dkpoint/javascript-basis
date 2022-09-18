/*
    @ Array
        # Reference
            + Array : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
            + TypedArray : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray
*/

let array = new Array(2);
console.log(array); // [ <2 empty items> ]

array = new Array(1, 2, 3);
console.log(array); // [ 1, 2, 3 ]

array = Array.of(1, 2);
console.log(array); // [ 1, 2 ]

const array2 = [1, 2, 3, 4, 5];
console.log(array2); // [ 1, 2, 3, 4, 5 ]

array = Array.from(array2);
console.log(array); // [ 1, 2, 3, 4, 5 ]

text = 'Hello';
array = Array.from(text);
console.log(array); // [ 'H', 'e', 'l', 'l', 'o' ]

array = Array.from({
  0: 'H',
  1: 'i',
  length: 2,
});
console.log(array); // [ 'H', 'i' ]
