const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/17298.txt';

let input =  fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input.shift());
const nums = input[0].split(" ").map(item =>  +item);

const answer = new Array(n).fill(-1)
const stack = [];
for(let i = n-1; i >= 0; i--){
    if(stack.length === 0) stack.push(nums[i]);
    else{
        if(nums[i] >= nums[i+1]){
            while(stack[stack.length-1] <= nums[i]) {stack.pop()};
            if(stack[stack.length-1] > nums[i]) answer[i] = stack[stack.length-1];
            // stack.push(nums[i]);
        }else{
            answer[i] = stack[stack.length-1];
        }
        stack.push(nums[i]);
    }
}
console.log(answer.join(" "));
// 3 5 2 7

// 10 999999 1000000 999998 1000000 4 4 1000000 -1 1000000 -1









