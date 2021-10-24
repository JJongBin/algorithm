const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1764.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0].split(" ")[0]);
const m = parseInt(input[0].split(" ")[1]);

const arr = input.slice(1);

const solve = (n, m, arr) => {
    const answer = [];
    const hash = new Map();
    for(let i = 0; i < n; i++){
        hash.set(arr[i], (hash.get() || 0) + 1);
    }
    for(let i = n; i < n + m; i++){
        if(hash.get(arr[i]) === 1){
            answer.push(arr[i]);
        }
    }
    return answer.sort();
}
const output = solve(n, m, arr);
console.log(output.length);
for(const o of output){
    console.log(o);
}