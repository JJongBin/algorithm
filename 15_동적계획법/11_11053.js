const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './11_11053.txt'

let input = fs.readFileSync(filePath).toString().trim().split("\n");

n = input[0];
input.shift();
input = input[0].split(" ").map((item) => +item)

let i, j;
let temp = [];
for (i = 0; i < n; i++) {
    temp.push(1)
}

for (i = 0; i < n; i++) {
    for (j = 0; j < i; j++) {
        if (input[i] > input[j]) {
            temp[i] = Math.max(temp[j]+1, temp[i])
        }
    }
}
// console.log(temp)
console.log(Math.max.apply(null, temp))