/*
    @ private
        # Reference
            + private fields : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields#private_fields
*/

class Universe {
  type = 'Universe';
  #name;
  #emoji;

  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }

  display = () => {
    console.log(`${this.#name}: ${this.#emoji}`);
  };
}

const star = new Universe('Star', '⭐️');

console.log(star); // Universe { type: 'Universe', display: [Function: display] }

console.log(star.type); // Universe
console.log(star.name); // undefined
console.log(star.emoji); // undefined

star.display(); // Star: ⭐️
