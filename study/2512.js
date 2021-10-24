const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './tastcase/2512.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input.shift());
const nums = input.shift().split(" ").map(item => +item);
const total = parseInt(input[0]);

let answer = 0;
let left = 1;
let right = total;
let sum, temp, mid;

while(left <= right){
    mid = parseInt((left + right) / 2);

    sum = 0;
    temp = nums.reduce((prev, curr) => {
        sum += curr;
        if(mid >= curr) return prev + curr;
        else return prev + mid;
    }, 0);
    // console.log(sum)
    // console.log(temp, mid)

    // if(sum === temp) continue;

    if(temp > total || sum === temp){
        right = mid - 1;
    }else{
        left = mid + 1;
        answer = mid;
    }
}
answer = sum === temp ? answer + 1 : answer;
console.log(answer);