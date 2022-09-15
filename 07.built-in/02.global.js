/*
    @ Global Object
        # Reference
            + Built-ins : https://developer.mozilla.org/en-US/docs/Web/JavaScript/reference#built-ins
            + encodeURI() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI
            + decodeURI() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURI
            + encodeURIComponent() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
            + decodeURIComponent() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent
*/

console.log(globalThis);

console.log(this);

console.log(Infinity);

console.log(NaN);

console.log(undefined);

eval('const num = 2; console.log(num)'); // 2

console.log(isFinite(1)); // true
console.log(isFinite(Infinity)); // false

console.log(parseInt('12.34')); // 12
console.log(parseFloat('12.34')); // 12.34

const URL = 'https://오동근.com';
const encodedURL = encodeURI(URL);
console.log(encodedURL); // https://%EC%98%A4%EB%8F%99%EA%B7%BC.com

const decodedURL = decodeURI(encodedURL);
console.log(decodedURL); // https://오동근.com

const partURL = '오동근.com';
console.log(encodeURIComponent(partURL)); // %EC%98%A4%EB%8F%99%EA%B7%BC.com
