/*
    @ Immutability
*/

// return New Object
function changeColor(object) {
  return { ...object, color: 'Red' }; // Good Good Good
}

const origin_object = { color: 'White' };
console.log('Change Color :', changeColor(origin_object));
console.log('origin_object : ', origin_object);

// Primitive : Copy by Value
function display(number) {
  number = 5; // Bad Bad Bad

  console.log(number);
}

const primitive_value = 3;
display(primitive_value);
console.log(primitive_value);

// Object : Copy by Reference
function displayObject(object) {
  object.color = 'Red'; // Bad Bad Bad

  console.log(object);
}

const object_value = { color: 'White' };
displayObject(object_value);
console.log(object_value);
