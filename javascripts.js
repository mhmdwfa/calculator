let current = '';
let final = '';
let display = document.querySelector('.Calculator-display');
function add(final, current) {
  final = final + current;
  return final;
}
function subtract(final, current) {
  final = final - current;
  return final;
}
function multiply(final, current) {
  final = final * current;
  return final;
}
function divide(final, current) {
  final = final / current;
  return final;
}
function oneHundred(current) {
  final = current / 100;
  return final;
}
function numString(num) {
  current += num;
  display.textContent = current;
}

let one = document.querySelector('.1');
one.addEventListener('click', () => numString('1'));

// display.textContent = current;
