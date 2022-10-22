/*
    @ Freeze
        # Reference
            + Object.freeze() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
            + Object.isFrozen() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen
*/

const moon = {
  name: 'Moon',
  emoji: {
    full: '🌕',
    crescent: '🌜',
  },
};

Object.freeze(moon);
console.log(moon); // { name: 'Moon', emoji: { full: '🌕', crescent: '🌜' } }
console.log(Object.isFrozen(moon)); // true
// moon.name = 'crescent-moon';  // TypeError: Cannot assign to read only property 'name' of object '#<Object>'
// delete moon.name; // TypeError: Cannot delete property 'name' of #<Object>
// moon.color = 'white'; // TypeError: Cannot add property color, object is not extensible

moon.emoji.crescent = '🌙';
console.log(moon.emoji.crescent); // 🌙 attributes of child object can be modified

function deepFreeze(object) {
  // Retrieve the property names defined on object
  const ownPropertyNames = Object.getOwnPropertyNames(object);

  // Freeze properties before freezing self
  for (const name of ownPropertyNames) {
    const value = object[name];

    if (value && typeof value === 'object') {
      deepFreeze(value);
    }
  }

  return Object.freeze(object);
}

deepFreeze(moon);

// moon.emoji.crescent = '🌜🌙'; // TypeError: Cannot assign to read only property 'crescent' of object '#<Object>'
console.log(moon.emoji.crescent); // 🌙
