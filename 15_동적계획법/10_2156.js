const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : './10_2156.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n').map((item) => +item);

// console.log(input)

n = input[0];
input.shift();

// console.log(input);

let temp = [];
let i;

if (n>=3) {
    temp[0] = input[0];
    temp[1] = Math.max(input[0] + input[1], temp[0]);
    temp[2] = Math.max(input[0] + input[2], input[1] + input[2], temp[1]);
} else {
    for (i = 0; i<n; i++) {
        if (i === 0) {
            temp[0] = input[0];
        } else {
            temp[i] = Math.max(input[0] + input[1], temp[0])
        }
    }
}


// console.log(temp)
for (i = 3; i < n; i++) {
    temp[i] = Math.max(temp[i-2] + input[i], temp[i-3] + input[i-1] + input[i], temp[i-1]);
}
console.log(Math.max.apply(null, temp));
// console.log(temp)


