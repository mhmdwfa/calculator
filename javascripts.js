let current = '';
let final = '';
let operotion = '';
let EQUAL = '';
let display = document.querySelector('.Calculator-display');

function check() {
  if (operotion === '+') {
    add(current);
  } else if (operotion === '-') {
    subtract(current);
  } else if (operotion === '*') {
    multiply(current);
  } else if (operotion === '/') {
    divide(current);
  } else if (operotion === '%') {
    oneHundred(current);
  }
}

function add(num) {
  final = Number(final) + Number(num);
  current = '';
  display.textContent = final;
}
function subtract(num) {
  if (final === '') {
    final = Number(num);
    current = '';
    display.textContent = final;
  } else {
    final = Number(final) - Number(num);
    current = '';
    display.textContent = final;
  }
}
function multiply(num) {
  if (final === '') {
    final = Number(num);
    current = '';
    display.textContent = final;
  } else if (current === '') {
    return;
  } else {
    final = Number(num) * Number(final);
    current = '';
    display.textContent = final;
  }
}
function divide(num) {
  if (final === '') {
    final = Number(num);
    current = '';
    display.textContent = final;
  } else if (current === '') {
    return;
  } else {
    final = Number(final) / Number(num);
    current = '';
    display.textContent = final;
  }
}
function oneHundred(num) {
  if (final === '') {
    final = Number(num) / 100;
    current = '';
    display.textContent = final;
  }
}
function numString(num) {
  if (num === '.' && current.includes('.')) {
    return;
  } else if (EQUAL !== '') {
    current = '';
    final = '';
    EQUAL = '';
    display.textContent = current;
  } else if (current === '0') {
    current = '';
  }

  current += num;
  display.textContent = current;
}
let one = document.querySelector('.n1');
one.addEventListener('click', () => numString('1'));

let two = document.querySelector('.n2');
two.addEventListener('click', () => numString('2'));

let three = document.querySelector('.n3');
three.addEventListener('click', () => numString('3'));

let four = document.querySelector('.n4');
four.addEventListener('click', () => numString('4'));

let five = document.querySelector('.n5');
five.addEventListener('click', () => numString('5'));

let six = document.querySelector('.n6');
six.addEventListener('click', () => numString('6'));

let seven = document.querySelector('.n7');
seven.addEventListener('click', () => numString('7'));

let eight = document.querySelector('.n8');
eight.addEventListener('click', () => numString('8'));

let nine = document.querySelector('.n9');
nine.addEventListener('click', () => numString('9'));

let zero = document.querySelector('.n0');
zero.addEventListener('click', () => numString('0'));

let dot = document.querySelector('.dot');
dot.addEventListener('click', () => numString('.'));

let plus = document.querySelector('.plus');
plus.addEventListener('click', () => {
  if (operotion === '') {
    operotion = '+';
  }
  check();
  operotion = '+';
});

let minus = document.querySelector('.minus');
minus.addEventListener('click', () => {
  if (operotion === '') {
    operotion = '-';
  }
  check();
  operotion = '-';
});

let x = document.querySelector('.x');
x.addEventListener('click', () => {
  if (operotion === '') {
    operotion = '*';
  }
  check();
  operotion = '*';
});

let devide = document.querySelector('.devide');
devide.addEventListener('click', () => {
  if (operotion === '') {
    operotion = '/';
  }
  check();
  operotion = '/';
});

let hundred = document.querySelector('.hundred');
hundred.addEventListener('click', () => {
  if (operotion === '') {
    operotion = '%';
  }
  check();
  operotion = '%';
});

let plusMinus = document.querySelector('.plusMinus');
plusMinus.addEventListener('click', () => {
  if (display.textContent === current) {
    current = -current;
    display.textContent = current;
  } else if (display.textContent === final) {
    final = -final;
    display.textContent = final;
  }
});

let clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
  current = '0';
  final = '';
  EQUAL = '';
  display.textContent = current;
});

let equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
  check();
  operotion = '';
  EQUAL = final;
  display.textContent = EQUAL;
  final = '';
  current = '';
});

let deleti = document.querySelector('.deleti');
deleti.addEventListener('click', () => {
  current = current.slice(0, -1);
  display.textContent = current;
});
