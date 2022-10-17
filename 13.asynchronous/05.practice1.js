/*
    @ Practice 1
*/

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

async function makeFriedEgg(place) {
  let chicken;
  try {
    chicken = await getChicken(place);
  } catch {
    chicken = '🐔';
  }
  const egg = await fetchEgg(chicken);

  return fryEgg(egg);
}

makeFriedEgg('🌳').then(console.log);
