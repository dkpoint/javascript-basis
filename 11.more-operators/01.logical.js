/*
    @ Logical
        # Reference
            + Binary logical operators : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#binary_logical_operators
*/

const emoji1 = { name: 'moon1' };
const emoji2 = { name: 'moon2', display: '🌙' };
const action = 'Call function.';

let result = true && action;
console.log(result); // Call function.
result = false && action;
console.log(result); // false

result = true || action;
console.log(result); // true
result = false || action;
console.log(result); // Call function.

function makeDisplay(item, display) {
  if (item.display) {
    throw new Error('It already has a display.');
  }

  item.display = display;
}

function changeDisplay(item, display) {
  if (!item.display) {
    throw new Error('Please make a display.');
  }

  item.display = display;
}

console.log(emoji1); // { name: 'moon1' }
console.log(emoji2); // { name: 'moon2', display: '🌙' }

console.log(!!emoji1.display); // false
console.log(!!emoji2.display); // true

emoji1.display || makeDisplay(emoji1, '🌙');
emoji2.display || makeDisplay(emoji2, '🌙');
console.log(emoji1); // { name: 'moon1', display: '🌙' }
console.log(emoji2); // { name: 'moon2', display: '🌙' }

emoji1.display && changeDisplay(emoji1, '🌕');
emoji2.display && changeDisplay(emoji2, '🌕');
console.log(emoji1); // { name: 'moon1', display: '🌕' }
console.log(emoji2); // { name: 'moon2', display: '🌕' }

function printMessage(text) {
  const message = text || 'Please enter your message.';
  console.log(message);
}

printMessage(); // Please enter your message.
printMessage(null); // Please enter your message.
printMessage(0); // Please enter your message.
printMessage(undefined); // Please enter your message.
