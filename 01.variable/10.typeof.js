/*
    @ typeof
        The typeof operator returns a string indicating the type of the unevaluated operand.
        
        # Reference
            + typeof : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
*/

console.log(typeof 33);
// expected output: "number"

console.log(typeof (123 / 'text'));
// expected output: "number" (Despite being "Not-A-Number")

console.log(typeof '');
// expected output: "string"

console.log(typeof 'dkpoint');
// expected output: "string"

console.log(typeof true);
// expected output: "boolean"

console.log(typeof undeclaredVariable);
// expected output: "undefined"

console.log(typeof { name: 'Star', display: '⭐' });
// expected output: "object"

console.log(typeof null);
// expected output: "object"
