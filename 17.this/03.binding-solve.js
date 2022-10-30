/*
    @ Binding Solve
        # Reference
            + Function.prototype.bind() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
            + Arrow function expressions : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
*/

function Moon(name, emoji) {
  this.name = name;
  this.emoji = emoji;

  this.printEmoji = function () {
    console.log(`${this.emoji}`);
  };

  // # Function.prototype.bind()
  this.printEmoji = this.printEmoji.bind(this);
}

function FullMoon(name, emoji) {
  this.name = name;
  this.emoji = emoji;

  // # Arrow function expressions
  this.printEmoji = () => {
    console.log(`${this.name} : ${this.emoji}`);
  };
}

const moon = new Moon('Moon', '🌙');
const fullMoon = new FullMoon('Full Moon', '🌕');

function printEmoji(callbackFunction) {
  callbackFunction();
}

printEmoji(moon.printEmoji); // 🌙
printEmoji(fullMoon.printEmoji); // Full Moon : 🌕
