const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./16_2565.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

n = parseInt(input[0]);
input.shift();

input = input.map(item => item.split(" ").map(item2 => +item2))

// 정렬
input.sort((a, b) => parseInt(a[0]) - parseInt(b[0]));

// console.log(input)

let temp = [];
let i;
let j;

for (i = 0; i < n; i++) {
    temp.push(1);
}
// console.log(temp)

for (i = 0; i < n; i++) {
    for (j = 0; j < i; j++) {
        if (input[i][1] > input[j][1]) {
            temp[i] = Math.max(temp[j]+1, temp[i]);
        }
    }
}

console.log(n - Math.max.apply(null, temp))





