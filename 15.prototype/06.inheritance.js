/*
    @ Inheritance
        # Reference
            + Inheritance and the prototype chain : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
            + instanceof : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
*/

function Animal(name, emoji) {
  this.name = name;
  this.emoji = emoji;
}

Animal.prototype.printAnimal = function () {
  console.log(`${this.name} : ${this.emoji}`);
};

function Dog(name, emoji, owner) {
  Animal.call(this, name, emoji);

  this.owner = owner;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.play = function () {
  console.log(`Play with ${this.owner}.`);
};

const dog1 = new Dog('Star', '🐩', 'DK');
dog1.printAnimal(); // Star : 🐩
dog1.play(); // Play with DK.

console.log(dog1 instanceof Dog); // true
console.log(dog1 instanceof Animal); // true
