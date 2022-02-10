const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter year: ", (str) => {
  if (str !== "") {
    console.log("This string is not empty");
  } else {
    console.log("This string is empty");
  }
});
