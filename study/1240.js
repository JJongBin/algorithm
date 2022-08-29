const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1240.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.map(item => item.split(' ').map(Number));
const answer = [];
const [n, m] = input[0];
const arr = [...Array(n + 1)].map(_ => new Array());

for (let i = 1; i < n; i++) {
  const [x, y, d] = input[i];
  arr[x].push([y, d]);
  arr[y].push([x, d]);
}

const bfs = (x, y) => {
  const queue = [[x, 0]];
  const check = new Array(n + 1).fill(0);
  check[x] = 1;

  while (queue.length) {
    const [now, dist] = queue.shift();

    for (const [x, d] of arr[now]) {
      if (x === y) return d + dist;
      if (check[x]) continue;
      check[x] = 1;
      queue.push([x, d + dist]);
    }
  }
};

for (let i = n; i < input.length; i++) answer.push(bfs(input[i][0], input[i][1]));

console.log(answer.join('\n'));
