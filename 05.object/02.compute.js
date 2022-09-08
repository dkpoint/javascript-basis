/*
    @ Compute
        # Reference
            + Working with Objects : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
*/

function setValue(object, key, value) {
  object[key] = value;
}

function getValue(object, key) {
  return object[key];
}

function deleteKey(object, key) {
  delete object[key];
}

const universe = {
  name: 'Star',
};

setValue(universe, 'display', '⭐️');

console.log(getValue(universe, 'name')); // Star
console.log(getValue(universe, 'display')); // ⭐️

deleteKey(universe, 'display');

console.log(getValue(universe, 'display')); // undefined
