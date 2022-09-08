/*
    @ Method
        # Reference
            + Method definitions : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions
*/

const orange = {
  name: 'Orange',
  display: function () {
    console.log(`${this.name}: 🍊`);
  },
};

orange.display();
