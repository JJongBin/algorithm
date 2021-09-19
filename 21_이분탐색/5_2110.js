const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './5_2110.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0].split(" ")[0]);
const c = parseInt(input.shift().split(" ")[1]);

input = input.map(item => +item);
input.sort((a, b) => {return a-b} )

// console.log(n, c);
// console.log(input);

let start = 1;
let end = input[input.length-1] - input[0];
// let result = input[input.length-1];
let result = 0;
// console.log(start, end);

while (start <= end){
    mid = parseInt((start + end) / 2);
    
    temp = input[0];
    count = 1;
    for (let i = 1; i < n; i++) {
        if (temp + mid <= input[i]){
            count++;
            
            temp = input[i];
        }
    }
    // console.log(count)
    if (count >= c){
        result = mid;
        // if (result < mid){
        // }
    }
    // console.log(start, end, mid, " / ", count + " / " + result)
    if (count < c){
        end = mid - 1;
    } else if (count >= c){
        start = mid + 1;
    }
    // console.log(start, end, mid)
}

console.log(result);