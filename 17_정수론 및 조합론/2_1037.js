const fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : "./2_1037.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = input[0];
input.shift();
input = input[0].split(" ").map(item => +item);

const result = Math.max.apply(null, input) * Math.min.apply(null, input);

console.log(result);