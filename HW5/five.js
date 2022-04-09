"use strict";

let salaries = {
  Cris: 150,
  Brain: 600,
  John: 300,
  Steve: 400,
  Bill: 50,
  Klinton: 1000,
};

const averageSalaries = (salaries) => {
  let count = 0;
  for (let key in salaries) {
    count += salaries[key];
  }
  const res = count / Object.keys(salaries).length;
  return Math.round(res);
};

console.log(averageSalaries(salaries));
