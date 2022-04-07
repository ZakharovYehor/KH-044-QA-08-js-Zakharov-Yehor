const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter year: ", (year) => {
  if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
    console.log(`${year} is leap year`);
  } else {
    console.log(`${year} is not leap year`);
  }
});
