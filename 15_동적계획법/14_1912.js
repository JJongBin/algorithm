const fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : "./14_1912.txt"

let input = fs.readFileSync(filePath).toString().trim().split("\n");

n = parseInt(input[0]);
input = input[1].split(" ").map(item => +item);

// console.log(n)
// console.log(input)

// temp = []
// let i;
// let j;

// for (i = 0; i < n; i++) {
//     temp.push(-1000);
// }
// // console.log(temp)


// for (i = 0; i < n; i++) {
//     let tempNum = 0; 
//     for (j = i; j < n; j++) {
//         tempNum += input[j];
//         temp[i] = Math.max(temp[i], tempNum);
//     }
// }
// console.log(Math.max.apply(null,temp))



temp = []
let i;

for (i = 0; i < n; i++) {
    temp.push(-1000);
}
// console.log(temp)


for (i = 0; i < n; i++) {
    if (i === 0) {
        temp[i] = Math.max(temp[i], input[i]);
    } else {
        temp[i] = Math.max(temp[i-1]+input[i], input[i]);
    }
}
console.log(Math.max.apply(null,temp));