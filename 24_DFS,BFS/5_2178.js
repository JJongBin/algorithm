const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './5_2178.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0].split(" ")[0]);
const m = parseInt(input.shift().split(" ")[1]);

for (let i = 0; i < n; i++) {
    input[i] = input[i].split("").map(item => +item);
}
// console.log(n, m)
// console.log(input)

let visit = [];
let notVisit = [];

notVisit.push("0-0");
while (notVisit.length !== 0) {
    temp = notVisit.shift().split("-").map(item => +item);
    x = temp[0];
    y = temp[1];
    // console.log(x, y);
    // console.log(visit);
    if (!visit.includes(`${x}-${y}`)){
        visit.push(`${x}-${y}`);
        
    } else {
        continue;
    }
    if (x > 0) {
        if (input[x-1][y] === 1 && !visit.includes(`${x-1}-${y}`)) {
            notVisit.push(`${x-1}-${y}`);
            input[x-1][y] += input[x][y];
        }
    }
    if (y > 0) {
        if (input[x][y-1] === 1 && !visit.includes(`${x}-${y-1}`)) {
            notVisit.push(`${x}-${y-1}`);
            input[x][y-1] += input[x][y];
        }
    }
    if (x < input.length-1) {
        if (input[x+1][y] === 1 && !visit.includes(`${x+1}-${y}`)) {
            notVisit.push(`${x+1}-${y}`);
            input[x+1][y] += input[x][y];
        }
    }
    if (y < input[0].length-1) {
        if (input[x][y+1] === 1 && !visit.includes(`${x}-${y+1}`)) {
            notVisit.push(`${x}-${y+1}`);
            input[x][y+1] += input[x][y];
        }
    }
}

console.log(input[n-1][m-1]);