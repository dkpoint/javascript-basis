/*
    @ Practice 1
*/

// input: [ '🌕', '🌛', '🌛', '🌕' ]
// output: [ '🌕', '🌕', '🌕', '🌕' ]

function replaceAllItem(targetArray, targetItem, replaceItem) {
  const result = Array.from(targetArray);

  result.forEach((item, index) => {
    if (item === targetItem) {
      result[index] = replaceItem;
    }
  });

  return result;
}

const inputArray = ['🌕', '🌛', '🌛', '🌕'];
const result = replaceAllItem(inputArray, '🌛', '🌕');

console.log(result); // [ '🌕', '🌕', '🌕', '🌕' ]

// input: ['🍁', '🌛', '🍊'], ['⭐️', '🍊', '🍁']
// output: [ '🍁', '🍊' ]

function matchItem(targetArray1, targetArray2) {
  const result = [];

  targetArray1.forEach((item) => {
    if (targetArray2.includes(item)) {
      result.push(item);
    }
  });

  return result;
}

const inputArray2 = ['🍁', '🌛', '🍊'];
const inputArray3 = ['⭐️', '🍊', '🍁'];
const outputArray = matchItem(inputArray2, inputArray3);

console.log(outputArray); // [ '🍁', '🍊' ]
