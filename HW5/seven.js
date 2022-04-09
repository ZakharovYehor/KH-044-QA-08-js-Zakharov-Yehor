"use strict";

function mul(...rest) {
  let count = 0;
  let multiply = 1;
  for (let key in rest) {
    if (rest[key] === Number(rest[key])) {
      multiply *= rest[key];
    } else {
      count++;
      if (count === rest.length) {
        return 0;
      }
    }
  }
  return multiply;
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0
