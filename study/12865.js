const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/12865.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = parseInt(input[0].split(" ")[0]);
const k = parseInt(input[0].split(" ")[1]);

const arr = input.slice(1).map(item => item.split(" ").map(item2 => +item2));
const dy = new Array(k + 1).fill(0);

// console.log(arr)
for(let i = 0; i < arr.length; i++){
    for(let j = k; j >= arr[i][0]; j--){
        dy[j] = Math.max(dy[j], dy[j - arr[i][0]] + arr[i][1]);
    }
}
console.log(Math.max(...dy));



