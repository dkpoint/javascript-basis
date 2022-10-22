/*
    @ Seal
        # Reference
            + Object.seal() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal
            + Object.isSealed() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed
*/

const moon = {
  name: 'Moon',
  emoji: {
    full: '🌕',
    crescent: '🌜',
  },
};

Object.seal(moon);
console.log(moon); // { name: 'Moon', emoji: { full: '🌕', crescent: '🌜' } }
console.log(Object.isSealed(moon)); // true

// delete moon.name; // TypeError: Cannot delete property 'name' of #<Object>
moon.name = 'Full Moon'; // Changing property values on a sealed object
// moon.color = 'white'; // TypeError: Cannot add property color, object is not extensible
console.log(moon.name); // Full Moon
