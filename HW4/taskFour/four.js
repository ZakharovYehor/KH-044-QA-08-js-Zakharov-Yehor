const calc = (a, b, op) => {
  let res;
  if (op === 1) {
    res = a - b;
  } else if (op === 2) {
    res = a * b;
  } else if (op === 3) {
    res = a / b;
  } else if (op > 3 || op < 1) {
    res = a + b;
  } else {
    res = "Вы ввели не число";
  }

  return res;
};

console.log(calc(1, 2, "sad"));
