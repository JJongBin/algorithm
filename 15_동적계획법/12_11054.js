const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './12_11054.txt'

let input = fs.readFileSync(filePath).toString().trim().split("\n");

n = input[0];
input.shift();
input = input[0].split(" ").map((item) => +item)
// console.log(input)
let i, j;
let temp1 = [];
let temp2 = [];
let result = [];
for (i = 0; i < n; i++) {
    temp1.push(1)
    temp2.push(1)
}

for (i = 0; i < n; i++) {
    for (j = 0; j < i; j++) {
        if (input[i] > input[j]) {
            temp1[i] = Math.max(temp1[j]+1, temp1[i])
        }
    }
}
for (i = n-1; i >= 0; i--) {
    for (j = n-1; j > i; j--) {
        if (input[i] > input[j]) {
            temp2[i] = Math.max(temp2[j]+1, temp2[i])
        }
    }
}
// console.log(temp1)
// console.log(temp2)
for (i = 0; i < n; i++) {
    result[i] = temp1[i] + temp2[i] - 1
}
// console.log(temp1)
// if (result.length <= 2) {
//     console.log(0)
// }else {
//     console.log(Math.max.apply(null, result))
// }
console.log(Math.max.apply(null, result))