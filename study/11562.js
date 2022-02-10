const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/11562.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.map(item => item.split(' ').map(Number));

const [n, m] = input[0];

const check = [...Array(n + 1)].map(e => new Array(n + 1).fill(Infinity));

for (let i = 0; i < n + 1; i++) check[i][i] = 0;

for (let i = 1; i < m + 1; i++) {
  if (input[i][2] === 1) {
    check[input[i][0]][input[i][1]] = 0;
    check[input[i][1]][input[i][0]] = 0;
  } else {
    check[input[i][0]][input[i][1]] = 0;
    check[input[i][1]][input[i][0]] = 1;
  }
}

for (let k = 1; k < n + 1; k++) {
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (i === j) continue;
      check[i][j] = Math.min(check[i][j], check[i][k] + check[k][j]);
    }
  }
}

for (let i = 2 + m; i < input.length; i++) {
  console.log(check[input[i][0]][input[i][1]]);
}
