"use strict";

let biography = {
  name: "Yehor",
  age: 24,
  weight: 70,
  height: 185,
  Skin: "Black",
  Nik: "Black Panther",
};

const isEmpty = (biography) => {
  for (let key in biography) {
    return false;
  }
  return true;
};

console.log(isEmpty(biography));
