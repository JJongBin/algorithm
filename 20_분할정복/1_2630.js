const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './1_2630.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input.shift());

input = input.map(item => item.split(" ").map(item2 => +item2));

// console.log(n);
// console.log(input);

let white = 0;
let blue = 0;

const solve = (x, y, size) => {
    temp = input[x][y];
    if (size === 1) {
        if (temp === 0){
            white++;
        } else {
            blue++;
        }
        return;
    }
    for (let i = x; i < x+size; i++){
        for (let j = y; j < y+size; j++){
            if(temp === input[i][j]) {
                continue;
            } else {
                // console.log(size, x, y);
                solve(x, y, size/2);
                solve(x+(size/2), y, size/2);
                solve(x, y+(size/2), size/2);
                solve(x+(size/2), y+(size/2), size/2);
                return;
            }
        }
    }
    if (temp === 0){
        white++;
    } else {
        blue++;
    }
    return;
}

solve(0, 0, n);

console.log(white);
console.log(blue);

