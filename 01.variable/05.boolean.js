/*
    @ Boolean
        # Reference
            + Boolean : developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
*/

let isTrue = true;
let isFalse = false;
console.log(isTrue);
console.log(isFalse);

// Falshy(거짓인 값)
console.log('\u2606 Falshy');
console.log(Boolean(0));
console.log(!!-0);
console.log(!!NaN);
console.log(!!null);
console.log(!!undefined);
console.log(!!Boolean(''));

// Truthy(참인 값)
console.log('\u2606 Truthy');
console.log(Boolean(1));
console.log(!!-1);
console.log(!!Infinity);
console.log(!!-Infinity);
console.log(!!{});
console.log(!!Boolean('TEXT'));
