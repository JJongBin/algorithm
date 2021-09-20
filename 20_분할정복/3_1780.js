const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './3_1780.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input.shift());

input = input.map(item => item.split(" ").map(item2 => +item2));

let result = {
    "-1": 0,
    "0" : 0,
    "1" : 0
};



const solve  = (x, y, size) => {
    check = input[x][y];
    for (let i = x; i < x+size; i++){
        for (let j = y; j < y+size; j++){
            if(check !== input[i][j]){
                solve(x, y, size/3);
                solve(x, y+size/3, size/3);
                solve(x, y+(size/3)*2, size/3);
                solve(x+size/3, y, size/3);
                solve(x+size/3, y+size/3, size/3);
                solve(x+size/3, y+(size/3)*2, size/3);
                solve(x+(size/3)*2, y, size/3);
                solve(x+(size/3)*2, y+size/3, size/3);
                solve(x+(size/3)*2, y+(size/3)*2, size/3);
                return;
            }
        }
    }
    if(check === -1) {
        result[-1]++;
    } else if (check === 0) {
        result[0]++;
    } else {
        result[1]++;
    }
    
}

solve(0, 0, n);
for (let i = -1; i < 2; i++){
    console.log(result[i]);
}