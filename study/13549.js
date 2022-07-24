const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/13549.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);

const bfs = n => {
  const check = new Array(100001).fill(0);
  const queue = [[n, 0]];
  check[n] = 1;

  while (queue.length) {
    const [x, time] = queue.shift();
    if (x === k) return time;
    for (const next of [x * 2, x - 1, x + 1]) {
      if (next < 0 || next > 100000) continue;
      if (check[next]) continue;

      check[next] = 1;
      if (next === x * 2) queue.unshift([next, time]);
      else queue.push([next, time + 1]);
    }
  }
};

console.log(bfs(n));
