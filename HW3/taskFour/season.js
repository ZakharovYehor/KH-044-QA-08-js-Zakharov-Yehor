const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter number of month: ", (month) => {
  if (month == 01 || month == 02 || month == 12) {
    console.log("Winter");
  } else if (month == 03 || month == 04 || month == 05) {
    console.log("Spring");
  } else if (month == 06 || month == 07 || month == 08) {
    console.log("Summer");
  } else if (month == 09 || month == 10 || month == 11) {
    console.log("Autumn");
  } else {
    console.log("You entered the wrong number of month");
  }
});
