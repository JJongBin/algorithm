const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/16928.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');
const routeArr = input.slice(1).map(item => item.split(' ').map(Number));

const route = {};
for (const r of routeArr) {
  const [start, end] = r;
  route[start] = end;
}

const bfs = () => {
  const queue = [1];
  const check = new Array(100).fill(0);
  check[1] = 1;
  let cnt = 0;

  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const pos = queue.shift();
      for (let k = 1; k <= 6; k++) {
        const nextPos = route[pos + k] ? route[pos + k] : pos + k;

        if (nextPos === 100) return cnt + 1;
        if (nextPos > 100) continue;
        if (check[nextPos]) continue;

        check[nextPos] = 1;
        queue.push(nextPos);
      }
    }
    cnt += 1;
  }
};
const answer = bfs();
console.log(answer);
