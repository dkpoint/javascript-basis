/*
    @ Mixin
        # Reference
            + Object.assign() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
*/

/*
  @ Object.assign()
    copies all enumerable own properties from one or more source objects to a target object.
    It returns the modified target object.

    # Syntax : Object.assign(target, ...sources)
      + The target object — what to apply the sources' properties to, which is returned after it is modified.
      + The source object(s) — objects containing the properties you want to apply.
      + Return value — The target object.
*/

function Dog(name, emoji, owner) {
  this.name = name;
  this.emoji = emoji;
  this.owner = owner;
}

const play = {
  play: function () {
    console.log(`${this.emoji} plays with ${this.owner}.`);
  },
};

const sleep = {
  sleep: function () {
    console.log(`${this.emoji} sleeps.`);
  },
};

Object.assign(Dog.prototype, play, sleep);

const dog = new Dog('Star', '🐩', 'DK');

console.log(dog);
dog.play();
dog.sleep();
