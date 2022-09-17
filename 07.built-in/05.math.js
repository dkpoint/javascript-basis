/*
    @ Math
        # Reference
            + Math : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

console.log(Math.abs(-1)); // 1

console.log(Math.ceil(1.2)); // 2
console.log(Math.ceil(-1.2)); // -1

console.log(Math.floor(1.2)); // 1
console.log(Math.floor(-1.2)); // -2

console.log(Math.round(1.2)); // 1
console.log(Math.round(1.6)); // 2
console.log(Math.round(-1.2)); // -1
console.log(Math.round(-1.6)); // -2

console.log(Math.trunc(1.23)); // 1

console.log(Math.max(1, 2, 3, 4, 5)); // 5
console.log(Math.min(1, 2, 3, 4, 5)); // 1

console.log(3 ** 2); // 3^2
console.log(Math.pow(3, 2)); // 3^2

console.log(Math.random()); // 0 ~ 1
console.log(Math.floor(Math.random() * 10 + 1)); // 1 ~ 10
