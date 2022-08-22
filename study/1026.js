const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1026.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.map(str => str.split(' ').map(Number));
const n = input.shift()[0];
const arr1 = input.shift();
const arr2 = input.shift();

arr1.sort((a, b) => a - b);
arr2.sort((a, b) => b - a);
let answer = 0;

for (let i = 0; i < n; i++) answer += arr1[i] * arr2[i];
console.log(answer);
