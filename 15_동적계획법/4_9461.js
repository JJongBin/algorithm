const fs = require("fs")
const filePath = process.platform === 'linux' ? '/dev/stdin' : './4_9461.txt'

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const t = parseInt(input[0]);
input.shift();

const solve = (n) => {
    if (n<7) {
        return temp[n]
    } else {
        for (let j = 7; j<=n; j++) {
            temp[j] = temp[j-1] + temp[j-5]
        }
        return temp[n]
    }
}



let temp = [0,1,1,1,2,2,3];
for (let i = 0; i<t; i++) {
    console.log(solve(parseInt(input[i])));
}


