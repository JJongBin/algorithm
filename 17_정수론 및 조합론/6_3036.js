const fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : "./6_3036.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = input[0];
input.shift();

input = input[0].split(" ").map(item => +item);

let temp1 = input[0];
let temp2 = 0;
// let result = [];
let temp = 0;


const solve = (a, b) => {
    if (a % b === 0) {
        return b;
    } else {
        return solve(b, a%b);
    }
}

for (let i = 1; i < n; i++) {
    temp2 = input[i];
    temp = solve(Math.min(temp1, temp2), Math.max(temp1, temp2))
    // result.push(`${temp1/temp}/${temp2/temp}`);
    console.log(`${temp1/temp}/${temp2/temp}`);
    temp1 = temp2 * (temp1/temp2);
}

// console.log(...result);
// for (const a of result) {
//     console.log(a);
// }
// console.log(result)
// for (let i = 0; i < n-1; i++) {
//     console.log(result[i]);
// }
