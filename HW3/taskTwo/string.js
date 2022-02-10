const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter string: ", (str) => {
  let name = "";
  let symbol = "qwertyuiopasdfghjklzxcvbnm";
  let number = "0123456789";
  let specialSymbol = "(!#$%&'()*+,-./:;<=>?@[]^_`{|}~)";

  function CountStr(name, sns, str) {
    let count = 0;
    let res = "";
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < sns.length; j++) {
        if (str[i] === sns[j]) {
          count++;
          res += str[i];
        }
      }
    }
    console.log(`${name} ${count} ${res}`);
  }

  CountStr("Characters:", symbol, str);
  CountStr("Numbers:", number, str);
  CountStr("Special symbols:", specialSymbol, str);
});
