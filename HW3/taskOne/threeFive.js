const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter num1: ", (num1) => {
  readline.question("Enter num2: ", (num2) => {
    readline.question("Enter num3: ", (num3) => {
      readline.question("Enter num4: ", (num4) => {
        let arr = [];
        arr.push(num1, num2, num3, num4);
        for (let i in arr) {
          if (arr[i] % 3 == 0 || arr[i] % 5 == 0) {
            console.log(Number(arr[i]));
          }
        }
      });
    });
  });
});
