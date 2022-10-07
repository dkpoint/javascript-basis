/*
    @ Logical
        # Reference
            + Binary logical operators : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#binary_logical_operators
*/

const emoji1 = { name: 'star', display: '⭐️' };
const emoji2 = { name: 'moon', display: '🌙' };

let result = emoji1 && emoji2;
console.log(result); // { name: 'moon' }

result = emoji1 || emoji2;
console.log(result); // { name: 'star' }

result = false || emoji2;
console.log(result); // { name: 'moon' }
