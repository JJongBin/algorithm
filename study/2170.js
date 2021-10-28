const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../testcase/2170.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);

let line = input.slice(1).map(item => item.split(" ").map(item2 => +item2));
line.sort((a, b) => a[0] - b[0]);

// console.log(line);

let answer = 0;
let start = line[0][0];
let finish = line[0][1];
for(let i = 1; i < line.length; i++){
    if(line[i][0] <= finish){
        finish = Math.max(line[i][1], finish);
    }else{
        answer += finish - start;
        // console.log(start, finish)
        start = line[i][0];
        finish = line[i][1];
    }
}
answer += finish - start;
console.log(answer)