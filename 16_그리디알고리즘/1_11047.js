const fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : "./1_11047.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0].split(" ")[0]);
let k = parseInt(input[0].split(" ")[1]);

input.shift();
input = input.map(item => +item)
let result = 0;

for (let i = n-1; i >= 0; i--) {
    while(input[i]<= k) {
        result += parseInt(k / input[i]);
        k %= input[i];
    }
}

console.log(result);