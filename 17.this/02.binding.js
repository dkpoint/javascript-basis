/*
    @ binding
*/

function Moon(name, emoji) {
  this.name = name;
  this.emoji = emoji;

  this.printEmoji = function () {
    console.log(`${this.emoji}`);
  };
}

function FullMoon(name, emoji) {
  this.name = name;
  this.emoji = emoji;

  this.printEmoji = function () {
    console.log(`${this.name} : ${this.emoji}`);
  };
}

const moon = new Moon('Moon', '🌙');
const fullMoon = new FullMoon('Full Moon', '🌕');

moon.printEmoji(); // 🌙
fullMoon.printEmoji(); // Full Moon : 🌕

moon.printEmoji = fullMoon.printEmoji;
moon.printEmoji(); // Moon : 🌙
fullMoon.printEmoji(); // Full Moon : 🌕

function printEmoji(callbackFunction) {
  callbackFunction();
}

printEmoji(moon.printEmoji); // Cannot read properties of undefined (reading 'name')
