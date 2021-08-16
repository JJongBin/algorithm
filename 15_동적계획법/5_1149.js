const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './5_1149.txt';

const input = fs.readFileSync(filePath).toString().trim().split("\n")

const n = input[0];
input.shift();

for (let i = 0; i<n; i++) {
    input[i] = input[i].split(" ").map((item) => +item);

    if (i===0) {
        continue
    }

    input[i][0] = Math.min(input[i-1][1], input[i-1][2]) + input[i][0]
    input[i][1] = Math.min(input[i-1][0], input[i-1][2]) + input[i][1]
    input[i][2] = Math.min(input[i-1][0], input[i-1][1]) + input[i][2]
}
console.log(Math.min.apply(null, input[n-1]));

// let check = null;
// let sum = 0;
// for (let i = 0; i<n; i++) {
//     input[i] = input[i].split(" ").map((item) => +item);
//     // console.log(input[i])
//     let min = Math.min.apply(null, input[i]);
//     temp = input[i].indexOf(min);
//     if (min > Math.min.apply(null, input[i])) {
//         tempList = input[i]
//         input[i][temp] = 1001;
//         min = Math.min.apply(null, input[i]);
//         check = tempList.indexOf(min);
//     }
    
//     if (check === temp) {
//         tempList = input[i]
//         input[i][temp] = 1001;
//         min = Math.min.apply(null, input[i]);
//         check = tempList.indexOf(min);
//     } else {
//         check = temp;
//     }
//     sum += min;
// }
// console.log(sum)
