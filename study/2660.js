const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/2660.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();
input = input.map(str => str.split(' ').map(Number));
input.pop();

const dy = [...Array(n + 1)].map(_ => new Array(n + 1).fill(Infinity));
const dist = new Array(n + 1).fill(0);
for (const [a, b] of input) {
  dy[a][b] = 1;
  dy[b][a] = 1;
}
for (let k = 1; k < n + 1; k++) {
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      dy[i][j] = Math.min(dy[i][j], dy[i][k] + dy[k][j]);
    }
  }
}

let score = Infinity;
for (let i = 1; i < n + 1; i++) {
  for (let j = 1; j < n + 1; j++) {
    if (i === j) continue;
    dist[i] = Math.max(dist[i], dy[i][j]);
  }
  score = Math.min(score, dist[i]);
}

const candidate = [];
for (let i = 1; i <= n; i++) {
  if (dist[i] === score) candidate.push(i);
}

console.log(score, candidate.length);
console.log(candidate.join(' '));
