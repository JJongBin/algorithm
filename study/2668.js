const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/2668.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const n = input.shift();
const graph = [...Array(n + 1)].map(_ => new Array());
for (let i = 0; i < input.length; i++) graph[input[i]].push(i + 1);

let answer = [];
const check = new Array(n + 1).fill(0);
const dfs = (n, dist) => {
  check[n] = 1;
  for (const num of graph[n]) {
    check[num] = 1;
    if (dist.indexOf(num) !== -1) {
      answer = [...answer, ...dist];
      return;
    }
    dfs(num, [...dist, num]);
  }
};

for (let i = 1; i < n + 1; i++) if (!check[i]) dfs(i, [i]);
console.log(answer.length);
console.log(answer.sort((a, b) => a - b).join('\n'));
