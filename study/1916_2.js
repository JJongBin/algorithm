const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1916.txt';

const inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +inputs.shift();
const m = +inputs.shift();
const [start, end] = inputs.pop().split(' ').map(Number);
const bus = inputs.map(str => str.split(' ').map(Number));

const costs = [...Array(n + 1)].map(_ => new Array(n + 1).fill(Infinity));

for (const [s, e, v] of bus) {
  costs[s][e] = Math.min(costs[s][e], v);
}

for (let k = 1; k <= n; k++) {
  for (let i = 1; i <= n; i++) {
    if (costs[i][k] === Infinity) continue;
    for (let j = 1; j <= n; j++) {
      if (costs[i][j] > costs[i][k] + costs[k][j]) costs[i][j] = costs[i][k] + costs[k][j];
    }
  }
}

console.log(costs[start][end]);
