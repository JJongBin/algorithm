const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/2217.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);

const arr = input.slice(1).map(item => +item);
arr.sort((a, b) => b - a);

let min = 0;
let answer = 0;
// 현재까지의 가장 적은 밧줄에 곱하기 밧줄의 개수
for(let i = 0; i < n; i++){
    min = arr[i];
    answer = Math.max(answer, min*(i+1));
}
console.log(answer);


