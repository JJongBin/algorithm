const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/11725.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map(item => item.split(' ').map(Number));
const n = input[0][0];

const graph = [...Array(n + 1)].map(_ => new Array());
for (let i = 1; i < input.length; i++) {
  const [a, b] = input[i];
  graph[a].push(b);
  graph[b].push(a);
}

const answer = new Array(n - 1);

const bfs = () => {
  const queue = [1];
  const check = new Array(n + 1).fill(0);
  check[1] = 1;

  while (queue.length) {
    const node = queue.shift();
    for (const nextNode of graph[node]) {
      if (check[nextNode]) continue;
      check[nextNode] = 1;
      queue.push(nextNode);
      answer[nextNode - 2] = node;
    }
  }
};
bfs();
console.log(answer.join('\n'));
