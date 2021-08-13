const fs = require("fs");
filePath = process.platform === 'linux' ? "/dev/stdin" : "./1_1003.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

const fibonacci = (n) => {
    if (n == 0) {
        temp[0] += 1;
        return 0;
    } else if (n == 1) {
        temp[1] += 1;
        return 1;
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

const solve = (n) => {
    let p1 = [1, 0]
    let p2 = [0, 1]
    let result = []
    for (let i = 0; i<=n; i++) {
        if (i === 0) {
            result = p1;
            
        } else if (i === 1) {
            result = p2;
        } else {
            result = [ (p1[0]+p2[0]), (p1[1]+p2[1]) ]
            p1 = p2
            p2 = result
        }
    }
    console.log(result[0], result[1])
}

// let temp;
for (let i = 0; i<input.length; i++) {
    // temp = [0, 0]
    // fibonacci(input[i]);
    // console.log(i+1, " - ", temp[0], temp[1]);
    solve(input[i])
}