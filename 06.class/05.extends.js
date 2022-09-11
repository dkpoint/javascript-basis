/*
    @ extends
        # Reference
            + extends : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends
            + class : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class
*/

class Animal {
  constructor(color) {
    this.color = color;
  }

  eat() {
    console.log('eat!');
  }

  sleep() {
    console.log('sleep!');
  }
}

class Dog extends Animal {
  constructor(color, ownerName) {
    super(color);

    this.ownerName = ownerName;
  }

  // Overriding
  eat() {
    super.eat();

    console.log('eat! eat! eat!');
  }

  play() {
    console.log('play!');
  }
}

const dog = new Dog('Brown', 'DK');

console.log(dog);
dog.eat();
dog.play();
