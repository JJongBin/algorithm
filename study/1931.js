const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../testcase/1931.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
let time = input.slice(1).map(item => item.split(" ").map(item2 => +item2));


time = time.sort((a, b) => a[0] - b[0]);
time = time.sort((a, b) => a[1] - b[1]);

// console.log(n)
// console.log(time)

let answer = 1;
let finish = time[0][1];
for(let i = 1; i < time.length; i++){
    if(finish <= time[i][0]){
        answer++;
        finish = time[i][1];
    }
}

console.log(answer);