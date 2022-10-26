/*
    @ Class
        # Reference
            + constructor : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
            + extends : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends
*/

class Animal {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  print() {
    console.log(`${this.name} : ${this.emoji}`);
  }
}

class Dog extends Animal {
  constructor(name, emoji, owner) {
    super(name, emoji);

    this.owner = owner;
  }

  play() {
    console.log(`${this.emoji} plays with ${this.owner}.`);
  }
}

const dog = new Dog('Star', '🐩', 'DK');
dog.print(); // Star : 🐩
dog.play(); // Play with DK.

console.log(dog instanceof Dog); // true
console.log(dog instanceof Animal); // true
