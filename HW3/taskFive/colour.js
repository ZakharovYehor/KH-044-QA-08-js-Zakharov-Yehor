const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter colour: ", (colour) => {
  switch (colour) {
    case "red":
      console.log(colour.length);
      break;
    case "blue":
      console.log(colour.length);
      break;
    case "blue":
      console.log(colour.length);
      break;
    case "green":
      console.log(colour.length);
      break;
    case "yellow":
      console.log(colour.length);
      break;
    case "orange":
      console.log(colour.length);
      break;
    case "black":
      console.log(colour.length);
      break;
    case "white":
      console.log(colour.length);
      break;
    case "pink":
      console.log(colour.length);
      break;
    default:
      console.log("You entered the wrong colour");
  }
});
