/*
    @ while
        # Reference
            + while : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
*/

let number = 10;
while (number >= 0) {
  console.log(number);

  if (number === 3) {
    break;
  }

  number--;
}

let isActive = false;
while (isActive) {
  console.log('while');
}

do {
  console.log('do-while');
} while (isActive);
