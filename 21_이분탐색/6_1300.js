const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './6_1300.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
const k = parseInt(input[1]);

let start = 1;
let end = k;
let result = 0;
while (start <= end) {
    mid = parseInt((start + end) / 2);
    temp = 0;
    for (let i = 1; i < n+1; i++){
        // console.log(Math.min(parseInt(mid/i), n))
        temp += Math.min(parseInt(mid/i), n);
    } 
    if (temp >= k){
        // console.log("temp", temp, k)
        result = mid;
    } 
    // console.log(start, end,  mid, temp)
    if(temp < k){
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}
console.log(result);





