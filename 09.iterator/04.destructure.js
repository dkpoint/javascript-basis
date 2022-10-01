/*
    @ Destructuring assignment
        # Reference
            + Destructuring assignment : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
*/

const item = [120, 80];
const [width, height] = item;
console.log(width); // 120
console.log(height); // 80

function createEmoji(itemName, itemEmoji) {
  return [itemName, itemEmoji];
}

const [title, emoji] = createEmoji('Star', '⭐️');
console.log(title); // Star
console.log(emoji); // ⭐️

const DK = { name: 'DK', mail: 'dkpoint.oh@gmail.com', dept: 'S/W' };
function display({ name, mail, dept }) {
  console.log(name, mail, dept);
}
display(DK); // DK dkpoint.oh@gmail.com S/W

const { name, mail: e_mail, pet = '-' } = DK;
console.log(e_mail); // dkpoint.oh@gmail.com
console.log(pet); // -
