const fs = require("fs");
const { abort } = require("process");
const filePath = process.platform === 'linux'? "/dev/stdin" : "./3_11399.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
input.shift();

input = input[0].split(" ").map(item => +item);

input.sort((a,b) => {return a-b})

let temp = 0;
let result = 0;
for (let i = 0; i < n; i++){
    temp += input[i];
    result += temp
};

console.log(result)