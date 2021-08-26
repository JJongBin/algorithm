const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./15_12865.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0].split(" ")[0]);
const k = parseInt(input[0].split(" ")[1]);
// input.shift();

let i;
let j;

let temp = new Array(n+1);
for (i = 0; i < n+1; i++) {
    temp[i] = new Array(k+1).fill(0);
}

let weight = new Array(n);
let value = new Array(n);

for (i=0; i<n; i++) {
    weight[i] = parseInt(input[i+1].split(" ")[0]);
    value[i] = parseInt(input[i+1].split(" ")[1]);
}
// console.log("weight", weight)
// console.log("value", value)

for (i = 1; i<n+1; i++) {
    for (j = 1; j<k+1; j++) {
        if (j < weight[i-1]) {
            temp[i][j] = temp[i-1][j]
        }else {
            temp[i][j] = Math.max(temp[i-1][j], value[i-1] + temp[i-1][j-weight[i-1]])
        }
    }
}
// console.log(temp)
// console.log(input)
console.log(temp[n][k])