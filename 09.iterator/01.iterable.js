/*
    @ Iterable
        # Reference
            + Iteration protocols : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
*/

const array = [1, 2, 3];
for (const item of array) {
  console.log(item);
}
// 1
// 2
// 3

const iterator = array.values();
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3
console.log(iterator.next()); // { value: undefined, done: true }
console.log(iterator.next().done); // true

const iterator2 = array.values();
while (true) {
  const item = iterator2.next();
  if (item.done) break;
  console.log(item.value);
}
// 1
// 2
// 3

function makeIterator(initialValue, maxValue, callback) {
  return {
    [Symbol.iterator]() {
      const max_number = maxValue;
      let number = initialValue;

      return {
        next() {
          return { value: callback(number++), done: number > max_number };
        },
      };
    },
  };
}

const multiple = makeIterator(0, 4, (number) => number * 2);
for (const number of multiple) {
  console.log(number);
}
// 0
// 2
// 4
// 6
