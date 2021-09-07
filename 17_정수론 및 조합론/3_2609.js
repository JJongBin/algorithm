const fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : "./3_2609.txt";

let input = fs.readFileSync(filePath).toString().trim().split(" ").map(item => +item);


let i;
let j;
let num1 = input[0];
let num2 = input[1];
let temp = [[], []];
let idx = 0;


for (i = 0; i < 2; i++) {
    for (j = 1; j < input[i]+1; j++) {
        if (input[i]%j === 0) {
            temp[i].push(j);
        }
    }
}
// console.log(temp)

for (i=0; i < temp[0].length; i++) {
    if (temp[1].indexOf(temp[0][i]) !== -1){
        idx = temp[1].indexOf(temp[0][i])
    }
}

console.log(temp[1][idx])
console.log(temp[1][idx]*(num1/temp[1][idx])*(num2/temp[1][idx]))

