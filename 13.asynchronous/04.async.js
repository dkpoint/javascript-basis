/*
    @ async
        # Reference
            + async function : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
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

async function fetchUniverse() {
  const star = await getStar();
  const moon = await getMoon();

  return [star, moon];
}

fetchUniverse().then((universe) => console.log(universe));
