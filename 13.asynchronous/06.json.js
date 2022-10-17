/*
    @ JSON
        # Reference
            + JSON : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
*/

const star = {
  name: 'Star',
  shape: '⭐️',
  displayShape: () => {
    console.log('⭐️');
  },
};

console.log(star); // { name: 'Star', shape: '⭐️', displayShape: [Function: displayShape] }

// Serializing
const json = JSON.stringify(star);
console.log(json); // {"name":"Star","shape":"⭐️"}

// Deserializing
const object = JSON.parse(json);
console.log(object); // { name: 'Star', shape: '⭐️' }
