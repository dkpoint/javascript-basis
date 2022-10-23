/*
    @ Prototype
        # Reference
*/

function Fruit(name, emoji, color) {
  this.name = name;
  this.emoji = emoji;
  this.color = color;

  this.printName = () => {
    console.log(this.name);
  };
}

// Prototype method
Fruit.prototype.printItem = function () {
  console.log(`${this.emoji}`);
};

const apple = new Fruit('Apple', '🍎', 'red');
const orange = new Fruit('Orange', '🍊', 'orange');

// Instance method : override prototype method
orange.printItem = function () {
  console.log(`${this.name} : ${this.emoji}`);
};

console.log(apple);
/*
  Fruit {
  name: 'Apple',
  emoji: '🍎',
  color: 'red',
  printName: [Function (anonymous)] // Instance method
}
*/
console.log(orange);
/*
  Fruit {
    name: 'Orange',
    emoji: '🍊',
    color: 'orange',
    printName: [Function (anonymous)],  // Instance method
    printItem: [Function (anonymous)]   // Instance method
  }
*/

apple.printItem(); // 🍎
orange.printItem(); // Orange : 🍊

// Static method
Fruit.getColor = (item) => {
  return item.color;
};

console.log(Fruit.getColor(apple)); // red
