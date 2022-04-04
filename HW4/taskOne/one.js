// 1
const degree = Math.pow(3, 3);
console.log(degree);
// 2
const degreee = (x, n) => {
  let res = 1;
  for (let i = 1; i < n + 1; i++) {
    res *= x;
  }
  return res;
};

console.log(degreee(3, 3));
