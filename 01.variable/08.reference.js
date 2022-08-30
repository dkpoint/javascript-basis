/*
    @ Reference
        # Reference
            + Primitive : https://developer.mozilla.org/en-US/docs/Glossary/Primitive
            + Object : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#objects
*/

// Primitive : Copy by Value
let primitive_value = 1;
let a = primitive_value;
console.log('a:', a);

primitive_value = 2;
console.log('primitive_value:', primitive_value);
console.log('a:', a);

// Object : Copy by Reference
let flower = {
  color: 'white',
};

let rose = flower;
console.log('rose.color', rose.color);

flower.color = 'red';
console.log('rose.color', rose.color);
