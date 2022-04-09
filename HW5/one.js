"use strict";

let car = {
  model: "Ford",
  speed: "300 km/h",
  run: function () {
    let runCar = `${this.model} едет со скоростью ${this.speed}`;
    return runCar;
  },
  stop: function () {
    let stopCar = `${this.model} остановился`;
    return stopCar;
  },
};

console.log(car.run());
console.log(car.stop());
