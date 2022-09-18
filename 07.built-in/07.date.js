/*
    @ Date
        # Reference
            + Date : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

const date = new Date();
date.setUTCFullYear(1970);
date.setUTCMonth(0);
date.setUTCDate(1);
date.setUTCHours(0, 0, 0, 0);

// UTC(Universal Time Coordinated)
console.log(date); // 1970-01-01T00:00:00.000Z
console.log(date.getTime()); // 0 : The time value in milliseconds
console.log(date.getFullYear()); // 1970
console.log(date.getMonth() + 1); // 1
console.log(date.getDate()); // 1
console.log(date.toUTCString()); // Thu, 01 Jan 1970 00:00:00 GMT
