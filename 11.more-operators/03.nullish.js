/*
    @ Nullish
        # Reference
            + Nullish coalescing operator (??) : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
*/

let number = 0;
console.log(number || '-1'); // -1
console.log(number ?? '-1'); // 0
