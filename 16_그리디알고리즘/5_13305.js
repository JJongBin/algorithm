const fs = require("fs");
const filePath = process.platform === 'linux'? "/dev/stdin" : "./5_13305.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];

const path = input[1].split(" ").map(item => BigInt(item));
const node = input[2].split(" ").map(item => BigInt(item));


let minPrice = node[0]
let now = 0;
let next = 0;
let result = 0;
let temp;
let i;

while(true) {
    if (next+1 === node.length) {
        break;
    }
    for (i = now+1; i < n; i++) {
        if (minPrice >= node[i] || (i+1) === n) {
            minPrice = node[i];
            next = i;
            break;
        }
    }

    for (i = now; i < next; i++) {
        temp = node[now] * path[i];
        result = BigInt(result) + temp;
    }
    now = next
}
console.log(String(result));