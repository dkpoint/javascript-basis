/*
    @ setTimeout()
        # Reference
            + setTimeout() : https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
*/

function execute() {
  console.log('execute');

  setTimeout(() => {
    console.log('Time out');
  }, 2000);

  console.log('2');
}

execute();

function runInDelay(callback, time) {
  if (!callback) {
    throw new Error('callback is not defined.');
  }

  if (time > 0) {
    setTimeout(callback, time * 1000);
  } else {
    throw new Error('Please enter the time.');
  }
}

try {
  runInDelay(() => console.log('Hello~'), 3);
} catch (error) {
  console.log(error.message);
}
