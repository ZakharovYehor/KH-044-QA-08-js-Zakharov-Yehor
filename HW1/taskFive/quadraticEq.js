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
    let d = b * b - 4 * a * c;
    console.log('D = ' + d);
    if(d < 0)
        return false;
    res['discriminant'] = d;
    if(d == 0)
        res["quadratic roots"] = (-b + Math.sqrt(d)) / (2 * a);
    else if(d > 0){
        let tmp = [];
        tmp.push((-b + Math.sqrt(d)) / (2 * a));
        tmp.push((-b - Math.sqrt(d)) / (2 * a));
        res["quadratic roots"] = tmp;
    }
    console.log(res)
  readline.close()
  })
})
})