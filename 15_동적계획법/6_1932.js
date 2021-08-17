
const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './6_1932.txt';

const input = fs.readFileSync(filePath).toString().trim().split("\n")

const n = input[0];
input.shift();

let temp = input[input.length-1];
let i, j;

for (i = 0; i<n; i++) {
    input[i] = input[i].split(" ").map((item) => +item);
}

for (i = 1; i<n; i++) {
    for (j = 0; j<input[i].length; j++) {
        if (j===0) {
            input[i][j] += input[i-1][j];
        } else if (j === input[i].length-1) {
            input[i][j] += input[i-1][j-1];
        } else {
            input[i][j] += Math.max(input[i-1][j-1], input[i-1][j]);
        }
    }
}

console.log(Math.max.apply(null, input[n-1]));