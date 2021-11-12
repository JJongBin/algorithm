const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/2910.txt';

let input = fs.readFileSync(filePath).toString().trimEnd().split("\n");

const n = parseInt(input[0].split(" ")[0]);
const c = parseInt(input[0].split(" ")[1]);

input = input[1].split(" ").map(item => +item);

// map(hash)에 데이터 개수를 카운팅하며 넣어줌
const hash = new Map();
for(let i = 0; i < n; i++){
    hash.set(input[i], (hash.get(input[i]) || 0) + 1);
}

// 값을 기준으로 정렬, 리스트로 변환
let arr = [...hash.entries()].sort((a, b) => { return b[1] - a[1]})

const answer = [];
// 값의 개수만큼 키를 answer에 push
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i][1]; j++){
        answer.push(arr[i][0]);
    }
}
console.log(answer.join(" "));