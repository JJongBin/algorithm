const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './testcase/1697.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);

const BFS = n => {
  const queue = [];
  const check = new Array(100001).fill(0);
  queue.push(n);
  time = 0;
  if (n === k) return 0;

  while (queue) {
    let len = queue.length;
    time++;
    for (let i = 0; i < len; i++) {
      let pos = queue.shift();
      for (const next of [pos * 2, pos - 1, pos + 1]) {
        if (check[next] || next < 0 || next > 100001) continue;
        if (k === next) return time;
        check[next] = 1;
        queue.push(next);
      }
    }
  }
};

console.log(BFS(n));
