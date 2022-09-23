/*
    @ Practice 1
*/

// input: [ '🌕', '🌛', '🌛', '🌕' ]
// output: [ '🌕', '🌕', '🌕', '🌕' ]

function replaceAllItem(targetArray, targetItem, replaceItem) {
  const result = Array.from(targetArray);

  for (let index = 0; index < result.length; index++) {
    if (result[index] === targetItem) {
      result[index] = replaceItem;
    }
  }

  return result;
}

const inputArray = ['🌕', '🌛', '🌛', '🌕'];
const result = replaceAllItem(inputArray, '🌛', '🌕');

console.log(result); // [ '🌕', '🌕', '🌕', '🌕' ]
