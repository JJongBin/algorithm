const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './9_10844.txt'

let input = parseInt(fs.readFileSync(filePath).toString().trim());
// console.log(input)

let i;
let temp = [];
for (i = 0; i<=input; i++) {
    if (i === 1) {
        temp.push([0, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    } else {
        temp.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    }
}


// temp[i][j] = temp[i−1][j−1] + temp[i−1][j+1]
for (i = 2; i<=input; i++) {
    temp[i][0] = temp[i-1][1] % 1000000000
    temp[i][9] = temp[i-1][8] % 1000000000

    for (let j = 1; j<9; j++) {
        temp[i][j] = (temp[i-1][j-1] + temp[i-1][j+1]) % 1000000000;
    }
}

let result = 0;
for (i = 0; i<temp[input].length; i++) {
    result += temp[input][i];
}
console.log(String(result % 1000000000));
// console.log(temp);




