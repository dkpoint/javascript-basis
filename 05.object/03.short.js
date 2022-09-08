/*
    @ Short
*/

let x = 37;
let y = 127;

let coordinate = { x, y }; // { x: x, y: y};

console.log(coordinate);

function setCoordinate(x, y) {
  return {
    x,
    y,
  };
}

coordinate = setCoordinate(43, -79);
console.log(coordinate);
