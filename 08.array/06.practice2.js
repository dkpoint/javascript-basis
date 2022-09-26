/*
    @ Practice 2
*/

// input: [ '🌕', '🌛', '🌛', '🌕' ]
// output: [ '🌕', '🌕', '🌕', '🌕' ]
function replaceAllItem(targetArray, targetItem, replaceItem) {
  return targetArray.map((item) => (item === targetItem ? replaceItem : item));
}

const inputArray = ['🌕', '🌛', '🌛', '🌕'];
const result = replaceAllItem(inputArray, '🌛', '🌕');
console.log(result); // [ '🌕', '🌕', '🌕', '🌕' ]

// input: ['⭐️', '🍊', '🍁'], '⭐️'
// output: 1
function countItem(targetArray, filterItem) {
  return targetArray.filter((item) => item === filterItem).length;
}

const inputArray2 = ['⭐️', '🍊', '🍁'];
const result2 = countItem(inputArray2, '⭐️');
console.log(result2); // 1

// input: ['🍁', '🌛', '🍊'], ['⭐️', '🍊', '🍁']
// output: [ '🍁', '🍊' ]
function matchItem(targetArray1, targetArray2) {
  return targetArray1.filter((item) => targetArray2.includes(item));
}

const inputArray3 = ['🍁', '🌛', '🍊'];
const inputArray4 = ['⭐️', '🍊', '🍁'];
const result3 = matchItem(inputArray3, inputArray4);
console.log(result3); // [ '🍁', '🍊' ]

const number = [1, 12, 3, 21, 3, 30, 25];
const result4 = number
  .filter((item) => item > 5) // [ 12, 21, 30, 25]
  .reduce((average, item, _, array) => average + item / array.length, 0);
console.log(result4); // 22
