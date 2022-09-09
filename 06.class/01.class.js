/*
    @ Class
        # Reference
            + Class : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class
*/

class Universe {
  constructor(name, shape) {
    this.name = name;
    this.shape = shape;
  }

  display = () => {
    console.log(`${this.name}: ${this.shape}`);
  };
}

// Instance of class Universe : star
let star = new Universe('Star', '⭐️');

// Instance of class Universe : moon
let moon = new Universe('Moon', '🌕');

star.display();

moon.display();
