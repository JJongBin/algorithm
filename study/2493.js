const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/2493.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input.shift());
let nums = input[0].split(" ").map(item => +item);

// console.log(n)
// console.log(nums)
const answer = new Array(n).fill(0);
const stack = [];
for (let i = n; i >= 0; i--){
    while(nums[stack[stack.length-1]] < nums[i]){
        answer[stack.pop()] = i+1;
    }
    stack.push(i);

}

console.log(answer.join(" "))