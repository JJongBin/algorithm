const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/4796.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input.map(item => item.split(" ").map(item2 => +item2));

for(let i = 0; i < input.length-1; i++){
    let answer = 0;

    const l = input[i][0];
    const p = input[i][1];
    const v = input[i][2];

    answer += Math.floor(v / p) * l;
    if(v % p <= l) answer += (v % p);
    else answer += l;
    console.log(`Case ${i+1}: ${answer}`);
}

