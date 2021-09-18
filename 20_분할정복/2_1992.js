const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './2_1992.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input.shift());

input = input.map(item => item.split("").map(item2 => +item2));
let result = "";
const solve  = (x, y, size) => {
    check = input[x][y];
    for (let i = x; i < x+size; i++){
        for (let j = y; j < y+size; j++){
            if(check !== input[i][j]){
                result += "(";
                solve(x, y, size/2);
                solve(x, y+size/2, size/2);
                solve(x+size/2, y, size/2);
                solve(x+size/2, y+size/2, size/2);
                result += ")";
                return;
            }
        }
    }
    result += check.toString();
}

solve(0, 0, n);
console.log(result);