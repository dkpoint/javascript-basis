/*
    @ Unary operators
        # Reference
            + Unary plus : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus
            + Unary negation : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_negation
            + Logical not : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
*/

let a = 3;
a = -a; // -(3)
console.log(a); // -3

a = +a; // +(-3)
console.log(a); // -3

a = -a; // -(-3)
console.log(a); // 3

let isBoolean = true;
console.log(isBoolean); // true
console.log(!isBoolean); // false
console.log(!!isBoolean); // true

console.log(+false); // 0
console.log(+null); // 0
console.log(+''); // 0
console.log(+true); // 1
console.log(+'text'); // NaN
console.log(+undefined); // NaN

console.log(!null); // true
console.log(!undefined); // true
console.log(!''); // true
