/*
    @ for
        # Reference
            + for : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
*/

for (let index = 0; index < 5; index++) {
  console.log(index);
}

for (let x = 0; x < 2; x++) {
  for (let y = 0; y < 5; y++) {
    if (x === 1 && y === 0) {
      continue;
    }
    console.log(x, y);
  }
}

console.log('*******');

for (let x = 0; x < 2; x++) {
  for (let y = 0; y < 5; y++) {
    if (x === 1 && y === 0) {
      break;
    }
    console.log(x, y);
  }
}
