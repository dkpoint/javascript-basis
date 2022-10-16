/*
    @ Promise Static methods 
        # Reference
            + Promise Static methods : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#static_methods
*/

function getStar() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('⭐️');
    }, 2000);
  });
}

function getMoon() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🌕');
    }, 3000);
  });
}

function occurError() {
  return Promise.reject(new Error('Error has occurred.'));
}

Promise.all([getStar(), getMoon()]).then((universe) =>
  console.log('all', universe)
);
// all [ '⭐️', '🌕' ]

Promise.race([getStar(), getMoon()]).then((universe) =>
  console.log('race', universe)
);
// race ⭐️

Promise.allSettled([getStar(), getMoon(), occurError()])
  .then((universe) => console.log('all-settle', universe))
  .catch(console.log);
/* 
  all-settle [
    { status: 'fulfilled', value: '⭐️' },
    { status: 'fulfilled', value: '🌕' },
    {
      status: 'rejected',
      reason: Error: Error has occurred.
          at occurError (file:///Users/.../projects/javascript-basis/13.asynchronous/03.promise-static-method.js:24:25)
          at file:///Users/.../projects/javascript-basis/13.asynchronous/03.promise-static-method.js:37:43
          at ModuleJob.run (node:internal/modules/esm/module_job:198:25)
          at async Promise.all (index 0)
          at async ESMLoader.import (node:internal/modules/esm/loader:385:24)
          at async loadESM (node:internal/process/esm_loader:88:5)
          at async handleMainPromise (node:internal/modules/run_main:61:12)
    }
  ]
*/
