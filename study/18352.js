const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './testcase/18352.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map(item => item.split(' ').map(Number));

const [n, m, k, x] = input[0];

const graph = [...Array(n + 1)].map(_ => new Array());
for (let i = 1; i < input.length; i++) {
  const [a, b] = input[i];
  graph[a].push(b);
}

const check = new Array(n + 1).fill(0);

const bfs = now => {
  const queue = [now];
  check[now] = 1;
  let dist = 0;

  while (queue.length) {
    const len = queue.length;
    if (dist === k) return queue;
    for (let i = 0; i < len; i++) {
      const city = queue.shift();
      for (const nextCity of graph[city]) {
        if (check[nextCity]) continue;
        check[nextCity] = 1;
        queue.push(nextCity);
      }
    }
    dist++;
  }
  return [-1];
};

const citys = bfs(x);
console.log(citys.sort((a, b) => a - b).join('\n'));
