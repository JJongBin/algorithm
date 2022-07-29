const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/11724.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map(item => item.split(' ').map(Number));

const [n, m] = input[0];

const check = new Array(n + 1).fill(0);
const graph = [...Array(n + 1)].map(_ => new Array());

for (let i = 1; i < input.length; i++) {
  const [a, b] = input[i];
  graph[a].push(b);
  graph[b].push(a);
}

const bfs = now => {
  const queue = [now];
  check[now] = 1;
  while (queue.length) {
    const node = queue.pop();
    for (const nextNode of graph[node]) {
      if (check[nextNode]) continue;
      check[nextNode] = 1;
      queue.push(nextNode);
    }
  }
};

let answer = 0;
for (let i = 1; i < n + 1; i++) {
  if (check[i]) continue;
  bfs(i);
  answer++;
}

console.log(answer);
