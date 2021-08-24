const fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : "./13_9251.txt"

let input = fs.readFileSync(filePath).toString().trim().split("\n");

// console.log(input)

let i, j;
// let temp = [];

function create2DArray(rows, columns) {
    let temp = new Array(rows);
    for (let i = 0; i < rows; i++) {
        temp[i] = new Array(columns).fill(0);

    }
    return temp;
}

const l1 = input[0].length
const l2 = input[1].length
let temp = create2DArray(l1+1, l2+1);
// console.log(temp)



for (i = 1; i<l1+1; i++) {
    for (j = 1; j<l2+1; j++) {
        if (input[0][i-1] === input[1][j-1]) {
            temp[i][j] = temp[i-1][j-1] + 1;
        } else {
            temp[i][j] = Math.max(temp[i][j-1], temp[i-1][j]);
        }
    }
}
// console.log()
// console.log(temp)
console.log(temp[l1][l2])

// ACAYKP
// CAPCAK