/*
    @ Const
        # Reference
            + const : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
            + let : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
*/

// let : Reassignable, Mutable
let item = 'fruit';
item = 'flower';

// const : Mutable
const max_input_number = 9999;

// TypeError: Assignment to constant variable.
// max_input_number = 10000;

const fruit = {
  name: 'apple',
  color: 'red',
};

// TypeError: Assignment to constant variable.
// fruit = {};

fruit.name = 'orange';
