/*
    @ Object
        # Reference
            + Object : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
*/

let apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};

console.log(apple);
console.log(apple.name);
console.log(apple.color);
console.log(apple.display);

let orange = {
  name: 'orange',
  color: 'orange',
  display: '🍊',
};

console.log(orange);
console.log(orange.name);
console.log(orange.color);
console.log(orange.display);

let fruit = {
  apple,
  orange,
};

console.log(fruit.apple.color);
console.log(fruit.orange.color);
console.log(fruit.apple.display);
console.log(fruit.orange.display);
