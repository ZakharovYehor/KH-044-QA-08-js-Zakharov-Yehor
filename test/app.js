// Это команда для вывода в консоль
//(Ты можешь туда вписать переменную или какую-то строку или операцию и тд)
console.log("Здесь то что ты хочешь вывести")

// Есть два варианта ввода
// 1) Когда ты запускаешь код "node app.js 123312(Это к примеру, после файла пишешь то что тебе нужно ввести)"
// 2) 

// 1 блок ниже это подключение библиотеки чтобы можно было делать ввод в консоли
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  readline.question("Enter the hex number: ", (num) => {
    res = parseInt(num, 16);
    console.log(res)
  readline.close()
  })
                                            



