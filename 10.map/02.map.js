/*
    @ Map
        # Reference
            + Map : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
*/

const map = new Map([
  ['key1', '🍊'],
  ['key2', '🍎'],
]);
console.log(map); // Map(2) { 'key1' => '🍊', 'key2' => '🍎' }
console.log(map.size); // 2
console.log(map.has('key1')); // true

map.forEach((value, key) => console.log(key, value));
// key1 🍊
// key2 🍎

console.log(map.keys()); // [Map Iterator] { 'key1', 'key2' }
console.log(map.values()); // [Map Iterator] { '🍊', '🍎' }
console.log(map.entries()); // [Map Entries] { [ 'key1', '🍊' ], [ 'key2', '🍎' ] }

console.log(map.get('key1')); // 🍊
console.log(map.get('key2')); // 🍎

map.set('key3', '🍇');
console.log(map); // Map(3) { 'key1' => '🍊', 'key2' => '🍎', 'key3' => '🍇' }

map.delete('key3');
console.log(map); // Map(2) { 'key1' => '🍊', 'key2' => '🍎' }

map.clear();
console.log(map); // Map(0) {}
