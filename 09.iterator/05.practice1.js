/*
    @ Practice 1
*/

const prop = {
  name: 'Button',
  styles: {
    size: 30,
    color: 'black',
  },
};

function getItemColor({ styles: { color } }) {
  console.log(color);
}

getItemColor(prop); // black
