let arr = [3, 5, 2, 4, 6, 1, 3, 4, 4];
let sum = 0;
for (let element of arr) {
  if (element % 2 == 0) {
    sum += Math.sqrt(element);
  }
}
console.log(sum);

const result = arr.reduce((sum, element) => {
  if (element % 2 === 0) {
    return sum + Math.sqrt(element);
  }
  return sum;
}, 0);

console.log(result);
