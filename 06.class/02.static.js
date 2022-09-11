/*
    @ static
        # Reference
            + static : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
*/

class Universe {
  static MAX_INSTANCE = 5;

  constructor(name, shape) {
    this.name = name;
    this.shape = shape;
  }

  static createStar() {
    return new Universe('Star', '⭐️');
  }

  display = () => {
    console.log(`${this.name}: ${this.shape}`);
  };
}

let star = Universe.createStar();

star.display();

console.log(Universe.MAX_INSTANCE);
