const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/15729.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input.shift());
input = input[0].split(" ").map(item => +item);

// console.log(n);
// console.log(input);

const arr = new Array(n+2).fill(0);
let cnt = 0;
for(let i = 0; i < n; i++){
    if(input[i] === 1 && arr[i] === 0){
        cnt++;
        arr[i] = arr[i] === 0 ? 1 : 0;
        arr[i+1] = arr[i+1] === 0 ? 1 : 0;
        arr[i+2] = arr[i+2] === 0 ? 1 : 0;
    }else if(input[i] === 0 && arr[i] === 1){
        cnt++;
        arr[i] = arr[i] === 0 ? 1 : 0;
        arr[i+1] = arr[i+1] === 0 ? 1 : 0;
        arr[i+2] = arr[i+2] === 0 ? 1 : 0;
    }
    // console.log(arr);
}
console.log(cnt);

