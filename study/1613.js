const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1613.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.map(item => item.split(' ').map(Number));

const [n, t] = input[0];

const check = [...Array(n + 1)].map(e => new Array(n + 1).fill(0));

for (let i = 1; i < t + 1; i++) {
  check[input[i][0]][input[i][1]] = -1;
  check[input[i][1]][input[i][0]] = 1;
}

for (let k = 1; k < n + 1; k++) {
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (check[i][k] === -1 && check[k][j] === -1) check[i][j] = -1;
      if (check[i][k] === 1 && check[k][j] === 1) check[i][j] = 1;
    }
  }
}

for (let i = t + 2; i < input.length; i++) console.log(check[input[i][0]][input[i][1]]);
