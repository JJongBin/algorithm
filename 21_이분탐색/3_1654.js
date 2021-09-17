const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './3_1654.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const k = parseInt(input[0].split(" ")[0]);
const n = parseInt(input[0].split(" ")[1]);
input.shift();
input = input.map(item => +item);

let left = 1;
let right = Math.max.apply(null, input);

let check_n = 0;
let max_width = 0;
while(true){
    mid = parseInt((left+right) / 2);
    check_n = 0;
    
    check_n = input.reduce((prev, curr) => {
        return parseInt(curr/mid) + prev
    }, 0);
    // console.log(left, right, mid, check_n)

    if (check_n >= n){
        if(max_width < mid){
            max_width = mid;
        }
    } 
    if (check_n < n){
        right = mid-1;
    } else if (check_n >= n){
        left = mid+1;
    }
    if(left > right){
        break;
    }
}
console.log(max_width);


