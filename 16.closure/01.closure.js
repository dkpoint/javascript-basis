/*
    @ Closure
        # Reference
            + Closures : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
*/

/*
  @ Lexical scoping
    Note that the inner() function has no local variables of its own.
    However, since inner functions have access to the variables of outer functions,
    inner() can access the variable text declared in the parent function, outer().
*/
function outer() {
  const text = 'Hello~';
  function inner() {
    // inner() is the inner function, a closure
    console.log(text); // use variable declared in the parent function
  }
  return inner;
}

const inner = outer();
inner();

function Universe(name, emoji) {
  this.name = name;
  this.emoji = emoji;
}

Universe.prototype.getName = function () {
  console.log(this.name);
};
Universe.prototype.getEmoji = function () {
  console.log(this.emoji);
};

const star = new Universe('Star', '⭐');
star.getName();
star.getEmoji();
