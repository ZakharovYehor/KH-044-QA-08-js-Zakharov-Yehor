const digitN = (k, n) => {
  let numbers = ("" + k).split("").map(Number);
  if (n > numbers.length || n === 0) {
    return -1;
  } else if (n < numbers.length || n === numbers.length) {
    return numbers[numbers.length - n];
  } else {
    return "Вы ввели не число";
  }
};

console.log(digitN(2213123, 2));
