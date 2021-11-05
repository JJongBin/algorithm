const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/2217.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);

const arr = input.slice(1).map(item => +item);
arr.sort((a, b) => b - a);

let min = 0;
let answer = 0;
for(let i = 0; i < n; i++){
    min = arr[i];
    answer = Math.max(answer, min*(i+1));
}
console.log(answer);


