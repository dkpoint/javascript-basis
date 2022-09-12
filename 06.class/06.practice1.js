/*
    @ Practice 1
*/

class Counter {
  #value;

  constructor(startValue) {
    if (isNaN(startValue) || startValue < 0) {
      this.#value = 0;
    } else {
      this.#value = startValue;
    }
  }

  increment = () => {
    this.#value++;
  };

  get value() {
    return this.#value;
  }
}

const number = new Counter('text');
number.increment();
number.increment();

console.log(number.value);
