/*
    @ Shallow copy
        # Reference
            + Copy an array : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#copy_an_array
*/

// Array.from, concat, slice, spread(...), Object.assign

const rose = { name: 'rose', color: 'white', price: 1 };
const tulip = { name: 'tulip', color: 'pink', price: 1 };

const mainStore = [];
mainStore.push(rose);
mainStore.push(tulip);

const franchiseStore = Array.from(mainStore);
console.log(mainStore);
console.log(franchiseStore);

rose.price = 2;
console.log(mainStore);
console.log(franchiseStore);
