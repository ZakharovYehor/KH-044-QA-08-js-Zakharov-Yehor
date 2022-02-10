const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter year: ", (year) => {
  if (year % 4 === 0) {
    console.log("Leap year");
  } else {
    console.log("Not a leap year");
  }
});
