/*
    @ String
        # Reference
            + String : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

const string1 = 'A string primitive!';
const string2 = new String('A String object!');
console.log(typeof string1); //string
console.log(typeof string2); // object

console.log(string1[0]); // A
console.log(string1[1]); //
console.log(string1[2]); // s

console.log(string1.length); // 19

console.log(string1.charAt(0)); // A
console.log(string1.charAt(1)); //
console.log(string1.charAt(2)); // s

console.log(string1.indexOf('i')); // 5
console.log(string1.lastIndexOf('i')); // 15

console.log(string1.includes('a')); // false
console.log(string1.includes('A')); // true

console.log(string1.startsWith('A')); // true
console.log(string1.endsWith('!')); // true

console.log(string1.toUpperCase()); // A STRING PRIMITIVE!
console.log(string1.toLowerCase()); // a string primitive!

console.log(string1.lastIndexOf(' primitive!')); // 8
console.log(string1.substring(8)); //  primitive!
console.log(string1.slice(0, 8)); // A string
console.log(string1.split(' ')); // [ 'A', 'string', 'primitive!' ]
console.log(string1.split(' ', 2)); // [ 'A', 'string' ]

const trim = '     String    ';
console.log(trim.trim()); // String
