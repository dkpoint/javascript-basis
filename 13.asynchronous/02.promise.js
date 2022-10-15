/*
    @ Promise
        # Reference
            + Promise : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/

function runInDelay(time) {
  return new Promise((resolve, reject) => {
    if (time > 0) {
      setTimeout(resolve, time * 1000);
    } else {
      reject(new Error('Please enter the time.'));
    }
  });
}

runInDelay(3)
  .then(() => {
    console.log('Run!');
  })
  .catch(console.error)
  .finally(() => console.log('Done.'));

function getChicken(place) {
  if (!place) return Promise.reject(new Error('place is not defined.'));
  return Promise.resolve(`${place} => 🐓`);
}

function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

getChicken('🌳')
  .catch(() => '🐔')
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);
