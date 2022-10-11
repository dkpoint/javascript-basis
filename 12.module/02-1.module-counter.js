/*
    @ JavaScript modules
        # Reference
            + JavaScript modules : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
*/

let number = 0;

export function getNumber() {
  return number;
}

export function increase() {
  number++;
}

export function decrease() {
  number--;
}

export function initial(initialNumber) {
  number = initialNumber >= 0 ? initialNumber : 0;
}
