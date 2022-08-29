/*
    @ String
        # Reference
            + String : developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

let string = 'Hello';
console.log(string);

string = "'Hello'";
console.log(string);

string = '"Hello"';
console.log(string);

let nameGuest = 'Scarlet';
string = `Hello~ ${nameGuest}`; // Template Literal : ``
console.log(string);

string = `Hello~ \u2606`; // \uXXXX : Unicode
console.log(string);
