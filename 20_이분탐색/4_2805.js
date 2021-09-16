const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './4_2805.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");


const m = parseInt(input[0].split(" ")[1]);
input = input[1].split(" ").map(item => +item);

let bottom = 0;
let top = 2000000000;
// let top = Math.max.apply(null, input);
let minSize = top;

while(bottom <= top) {
    mid = parseInt((bottom+top)/2);

    check = input.reduce((prev, curr) => {
        if(curr <= mid){
            return prev;
        } else {
            return prev + (curr-mid);
        }
    }, 0)
    
    // console.log(bottom, top ,mid, check)
    if (check >= m){
        minSize = mid;
        if(check === m) {
            break;
        }
        // if (minSize < mid){
        //     minSize = mid;
        // }
        // break;
    }
    if (check > m){
        bottom = mid+1;
    }else if (check < m){
        top = mid-1;
    }
}
console.log(minSize);




