const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/16964.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.map(item => item.split(' ').map(Number));
const n = input[0][0];
const arr = input[input.length - 1];
const check = new Array(n + 1).fill(0);
const order = new Array(arr.length + 1).fill(0);
const compare = [];
let answer = 1;

const graph = [...Array(n + 1)].map(_ => new Array());
for (let i = 1; i < input.length - 1; i++) {
  graph[input[i][0]].push(input[i][1]);
  graph[input[i][1]].push(input[i][0]);
}

for (let i = 0; i < arr.length; i++) order[arr[i]] = i;
for (let i = 1; i < n + 1; i++) graph[i].sort((a, b) => order[a] - order[b]);

let flag = false;
const dfs = node => {
  if (flag) return;
  check[node] = 1;
  compare.push(node);

  for (const next of graph[node]) {
    if (!check[next]) dfs(next);
  }
};

dfs(1);
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== compare[i]) {
    answer = 0;
    break;
  }
}
console.log(answer);
