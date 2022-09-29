/*
    @ Generator
        # Reference
            + Generator : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator
*/

function* multipleGenerator() {
  try {
    for (let index = 0; index < 5; index++) {
      yield index ** 2;
    }
  } catch (error) {
    console.log(error);
  }
}

const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);
