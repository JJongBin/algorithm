const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './1_1920.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
let arr = input[1].split(" ").map(item => +item).sort((a, b) => a-b);
const m = parseInt(input[2]);
let target = input[3].split(" ").map(item => +item);

// console.log(n, arr, m, target);

// let left = 0;
// let right = 0;
for (let i = 0; i < m; i++){
    left = 0;
    right = arr.length-1;
    while (true) {
        mid = parseInt((left+right)/2);
        if (arr[mid] === target[i]){
            console.log(1)
            break;
        } else if (arr[mid] > target[i]){
            right = mid-1;
        } else if (arr[mid] < target[i]){
            left = mid+1;
        }
        if (left > right) {
            console.log(0)
            break;
        }
    }
}





