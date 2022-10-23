/*
    @ Prevent Extensions
        # Reference
            + Object.preventExtensions() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions
            + Object.isExtensible() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible
*/

const moon = {
  name: 'Moon',
  emoji: {
    full: '🌕',
    crescent: '🌙',
  },
};

Object.preventExtensions(moon);
console.log(moon); // { name: 'Moon', emoji: { full: '🌕', crescent: '🌙' } }
console.log(Object.isExtensible(moon)); // false

try {
  Object.defineProperty(moon, 'color', {
    value: 'white',
  });
} catch (e) {
  console.log(e);
  // TypeError: Cannot define property color, object is not extensible
}

moon.name = 'Full Moon';
console.log(moon.name); // Full Moon
delete moon.name;
console.log(moon); // { emoji: { full: '🌕', crescent: '🌙' } }
