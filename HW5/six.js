"use strict";

let calculator = {
  elementFirst: 0,
  elementSecond: 0,
  read: function () {
    this.elementFirst = parseInt(prompt("Введите первое значение"));
    this.elementSecond = parseInt(prompt("Введите второе значение"));
    return [this.elementFirst, this.elementSecond];
  },
  sum: function () {
    const sum = this.elementFirst + this.elementSecond;
    return sum;
  },
  mul: function () {
    const mul = this.elementFirst * this.elementSecond;
    return mul;
  },
};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
