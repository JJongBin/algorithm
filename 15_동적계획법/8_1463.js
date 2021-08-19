const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './8_1463.txt';

let input = parseInt(fs.readFileSync(filePath).toString().trim());

let i;
let temp = []

for (i = 0; i <= input; i++) {
    temp[i] = 0;  
}

for (i = 2; i <= input; i++) {
    temp[i] = temp[i-1] + 1;
    if (i % 3 === 0) {
        temp[i] = Math.min(temp[i], temp[i / 3]+1);
    }
    if (i % 2 === 0) {
        temp[i] = Math.min(temp[i], temp[i / 2]+1);
    }
} 
console.log(temp[input])