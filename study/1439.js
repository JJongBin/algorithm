const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../testcase/1439.txt';

let input = fs.readFileSync(filePath).toString().trim();

const len = input.length;
let cnt1 = 0;
let cnt0 = 0;
let temp = input[0];

if(input[len-1] === "1") cnt1++;
else cnt0++;

for(let i = 0; i < len; i++){
    if(temp !== input[i]){
        if(temp === "1") cnt1++;
        else cnt0++;
        temp = input[i];
    }
}
console.log(Math.min(cnt1, cnt0));