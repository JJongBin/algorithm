const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/10867.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input.shift());

input = input[0].split(" ").map(item => +item);

// map 생성(hash)
const hash = new Map();
for(let i = 0; i < n; i++){
    hash.set(input[i], (hash.get(input[i]) || 0) + 1);
}

// hash에서 키만 추출해서 정렬
const answer = [...hash.keys()].sort((a, b) => a - b);
console.log(answer.join(" "));


