/*
    @ Optional chaining
        # Reference
            + Optional chaining (?.) : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
*/

const item = { price: 1 };
const price = item?.price;
console.log(price);

function printName(item) {
  const itemName = item.info?.name;
  console.log(itemName);
}

const item2 = { info: { name: 'star', display: '⭐️' } };
printName(item2);
