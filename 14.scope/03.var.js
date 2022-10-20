/*
    @ var
        # Reference
            + var : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
*/

var moon = '🌕';
{
  console.log(moon);

  var moon = '🌙';
  {
    var moon = 'Moon';
  }
}
console.log(moon);

function getStar() {
  var star = '⭐';
}
console.log(star); // ReferenceError: star is not defined
