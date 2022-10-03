/*
    @ Set
        # Reference
            + Set : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
*/

const number = new Set([1, 2]);
console.log(number); // Set(2) { 1, 2 }
console.log(number.size); // 2
console.log(number.has(7)); // false

number.forEach((item) => console.log(item));
// 1
// 2

for (const value of number.values()) {
  console.log(value);
}
// 1
// 2

number.add(3);
console.log(number); // Set(3) { 1, 2, 3 }
number.add(3);
console.log(number); // Set(3) { 1, 2, 3 }

// Remove duplicate elements from the array
const numbers = [1, 1, 2, 2, 2, 3, 3, 3, 3, 3];
console.log([...new Set(numbers)]); // [ 1, 2, 3]

const rose = { name: 'rose', color: 'white', price: 1 };
const tulip = { name: 'tulip', color: 'pink', price: 1 };
const flower = new Set();
flower.add(rose);
flower.add(tulip);
console.log(flower);
// Set(2) { { name: 'rose', color: 'white', price: 1 }, { name: 'tulip', color: 'pink', price: 1 } }

rose.price = 2;
console.log(flower);
// Set(2) { { name: 'rose', color: 'white', price: 2 }, { name: 'tulip', color: 'pink', price: 1 } }

const rose2 = { name: 'rose', color: 'white', price: 2 };
flower.add(rose2);
console.log(flower);
// Set(3) { { name: 'rose', color: 'white', price: 2 }, { name: 'tulip', color: 'pink', price: 1 }, { name: 'rose', color: 'white', price: 2 } }

flower.delete(rose2);
console.log(flower);
// Set(2) { { name: 'rose', color: 'white', price: 2 }, { name: 'tulip', color: 'pink', price: 1 } }

flower.clear();
console.log(flower); // Set(0) {}
