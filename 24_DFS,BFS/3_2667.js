const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './3_2667.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input.shift());
// console.log(n)
// console.log(input)

for (let i = 0; i < n; i++) {
    input[i] = input[i].split("").map(item => +item);
}
// console.log(input)



const solve = (x0, y0) => {
    let visit = [];
    let notVisit = [];
    notVisit.push(`${x0}-${y0}`)
    while(notVisit.length !== 0) {
        temp = notVisit.pop().split("-").map(item => +item);
        x = temp[0];
        y = temp[1];
        input[x][y] = 0
        visit.push(`${x}-${y}`)
        
        if (x > 0) {
            if (input[x-1][y] === 1 && !notVisit.includes(`${x-1}-${y}`)) {
                notVisit.push(`${x-1}-${y}`);
            }
        }
        if (y > 0) {
            if (input[x][y-1] === 1 && !notVisit.includes(`${x}-${y-1}`)) {
                notVisit.push(`${x}-${y-1}`);
            }
        }
        if (x < input.length-1) {
            if (input[x+1][y] === 1 && !notVisit.includes(`${x+1}-${y}`)) {
                notVisit.push(`${x+1}-${y}`);
            }
        }
        if (y < input[0].length-1) {
            if (input[x][y+1] === 1 && !notVisit.includes(`${x}-${y+1}`)) {
                notVisit.push(`${x}-${y+1}`);
            }
        }
    }
    result.push(visit.length);
    // console.log(visit);
}


let result = [0];

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (input[i][j] === 1) {
            solve(i, j);
            result[0]++;
        }
    }
}
console.log(result.shift());
result.sort((a, b) => {return a-b});
for (const a of result) {
    console.log(a);
}