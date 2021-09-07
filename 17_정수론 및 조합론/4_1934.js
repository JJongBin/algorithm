const fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : "./4_1934.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const t = parseInt(input[0]);
input.shift();

let i;
let j;

const solve = (data) => {
    let temp = [[], []];
    let idx = 0;
    
    for (i = 0; i < 2; i++) {
        for (j = 1; j < data[i]+1; j++) {
            if (data[i]%j === 0) {
                temp[i].push(j);
            }
        }
    }
    
    for (i=0; i < temp[0].length; i++) {
        if (temp[1].indexOf(temp[0][i]) !== -1){
            idx = temp[1].indexOf(temp[0][i])
        }
    }
    
    console.log(temp[1][idx]*(data[0]/temp[1][idx])*(data[1]/temp[1][idx]));
}


for (let ii = 0; ii< t; ii++) {
    input[ii] = input[ii].split(" ").map(item => +item);
    solve(input[ii]);
}