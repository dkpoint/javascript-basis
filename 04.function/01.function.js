/*
    @ function
        # Reference
            + function : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
*/

function add(item1, item2) {
  return item1 + item2;
}

const result = add(3, 4);
console.log(result);

function itemPrice(item, price) {
  return `${item} are ${price} per pound.`;
}

console.log(itemPrice('Oranges', '$0.68'));
