/*
    @ Property
        # Reference
            + Object.defineProperties() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties
            + Object.getOwnPropertyDescriptors() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors
*/

const moon = { name: 'Moon', emoji: '🌕' };

console.log(Object.keys(moon)); // [ 'name', 'emoji' ]
console.log(Object.values(moon)); // [ 'Moon', '🌕' ]
console.log(Object.entries(moon)); // [ [ 'name', 'Moon' ], [ 'emoji', '🌕' ] ]

console.log('name' in moon); // true
console.log(moon.hasOwnProperty('name')); // true

// method returns all own property descriptors of a given object.
const descriptors = Object.getOwnPropertyDescriptors(moon);
console.log(descriptors);
/*
  {
    name: {
      value: 'Moon',
      writable: true,
      enumerable: true,
      configurable: true
    },
    emoji: { value: '🌕', writable: true, enumerable: true, configurable: true }
  }
*/

const desc = Object.getOwnPropertyDescriptor(moon, 'name');
console.log(desc); // { value: 'Moon', writable: true, enumerable: true, configurable: true }

Object.defineProperty(moon, 'name', {
  value: 'Full Moon',
  writable: false,
  enumerable: false,
  configurable: false,
});

console.log(Object.keys(moon)); // [ 'emoji' ]
// delete moon.name; // TypeError: Cannot delete property 'name' of #<Object>
console.log(moon.name); // Full Moon

const person = {};
Object.defineProperties(person, {
  firstName: {
    value: 'DK',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: 'O',
    writable: true,
    enumerable: true,
    configurable: true,
  },
});

console.log(person); // { firstName: 'DK', lastName: 'O' }
