/*
    @ Practice 1
*/

function loop(...functions) {
  const array = [];

  for (let index = 0; index < functions.length; index++) {
    array.push(functions[index]);
  }

  return array;
}

const printStar = () => console.log('⭐');
const printMoon = () => console.log('🌙');
const printDog = () => console.log('🐩');

const array = loop(printStar, printMoon, printDog);
array.forEach((func) => func());
// ⭐
// 🌙
// 🐩
