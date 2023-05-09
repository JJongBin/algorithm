const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1916.txt';

const inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +inputs.shift();
const m = +inputs.shift();
const [start, end] = inputs.pop().split(' ').map(Number);
const bus = inputs.map(str => str.split(' ').map(Number));

const graph = {};

for (const [s, e, v] of bus) {
  if (graph[`${s} ${e}`] === undefined) graph[`${s} ${e}`] = v;
  else graph[`${s} ${e}`] = Math.min(graph[`${s} ${e}`], v);
}

const costs = new Array(n + 1).fill(Infinity);
const visited = new Array(n + 1).fill(0);

costs[start] = 0;

for (let i = 1; i <= n; i++) {
  let pos;
  for (let j = 1; j <= n; j++) {
    if (visited[j]) continue;
    if (!pos || costs[j] < costs[pos]) pos = j;
  }

  visited[pos] = 1;
  for (let j = 1; j <= n; j++) {
    if (visited[j]) continue;
    const cost = costs[pos] + graph[`${pos} ${j}`];
    if (cost < costs[j]) costs[j] = cost;
  }
}

console.log(costs[end]);
