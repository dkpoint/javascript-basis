/*
    @ Boolean
        # Reference
            + Boolean : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
*/

// Falsy
console.log(`0:`, !!0);
console.log(`-0:`, Boolean(-0));
console.log(`null:`, !!null);
console.log(`NaN:`, Boolean(NaN));
console.log(`undefined:`, !!undefined);
console.log(`'':`, Boolean(''));

// Truthy
console.log(`1:`, Boolean(1));
console.log(`-1:`, !!-1);
console.log(`'0':`, Boolean('0'));
console.log(`'false':`, !!'false');
console.log(`[]:`, Boolean([]));
console.log(`{}:`, !!{});
