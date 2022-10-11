/*
    @ JavaScript modules
        # Reference
            + JavaScript modules : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
*/

import * as counter from './02-1.module-counter.js';

console.log(counter.getNumber()); // 0
counter.increase();
counter.increase();
console.log(counter.getNumber()); // 2
counter.decrease();
console.log(counter.getNumber()); // 1
counter.initial();
console.log(counter.getNumber()); // 0
