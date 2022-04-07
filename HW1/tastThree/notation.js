const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  readline.question("Enter the hex number: ", (num) => {
    res = parseInt(num, 16);
    console.log(res)
  readline.close()
  })