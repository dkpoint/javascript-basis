/*
    @ Object
        # Reference
            + Property accessors : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors
            + Delete operator : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
*/

const universe = {
  name: 'Star',
  'shape-display': '⭐️',
};

// Dot notation
console.log(universe.name);

// Bracket notation
console.log(universe['name']);
console.log(universe['shape-display']);

// Add property
universe.color = 'Yellow';
console.log(universe['color']);

// Delete operator
delete universe.color;
console.log(universe['color']); // undefined
