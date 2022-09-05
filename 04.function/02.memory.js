/*
    @ memory
        # Reference
            + function : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
*/

function itemPrice(item, price) {
  let itemLength = item !== undefined ? item.length : 0;
  let priceLength = price !== undefined ? price.length : 0;

  if (itemLength > 0 && priceLength > 0) {
    return `${item} are ${price} per pound.`;
  } else {
    return 'Please set the value.';
  }
}

const printPrice = itemPrice;

console.log(itemPrice('Oranges', '$0.7'));

console.log(printPrice);

console.log(printPrice('Apples', '$0.5'));

console.log(printPrice());

console.log(printPrice('', ''));
