const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  readline.question("Enter A: ", (a) => {
    readline.question("Enter B: ", (b) => {
        readline.question("Enter C: ", (c) => {
    
    if(a == 0)
        return false;
    let res = {};
    let D = b * b - 4 * a * c;
    console.log('D = ' + D);
    if(D < 0)
        return false;
    res['discriminant'] = D;
    if(D == 0)
        res["quadratic roots"] = (-b + Math.sqrt(D)) / (2 * a);
    else if(D > 0){
        let tmp = [];
        tmp.push((-b + Math.sqrt(D)) / (2 * a));
        tmp.push((-b - Math.sqrt(D)) / (2 * a));
        res["quadratic roots"] = tmp;
    }
    console.log(res)
  readline.close()
  })
})
})