/*
    @ new operator
        # Reference
            + new operator : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
*/

function Universe(name, shape) {
  this.name = name;
  this.shape = shape;
  this.display = () => {
    console.log(`${this.name}: ${this.shape}`);
  };
}

let star = new Universe('Star', '⭐️');
let moon = new Universe('Moon', '🌕');

star.display();

moon.display();
