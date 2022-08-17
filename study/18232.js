const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/18232.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map(item => item.split(' ').map(Number));

const [n, m] = input[0];
const [s, e] = input[1];

const teleport = [...Array(n + 1)].map(_ => new Array());
for (let i = 2; i < input.length; i++) {
  const [point1, point2] = input[i];
  teleport[point1].push(point2);
  teleport[point2].push(point1);
}

const check = new Array(n + 1).fill(0);
const bfs = s => {
  const queue = [s];
  check[s] = 1;
  let time = 1;
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const x = queue.shift();
      for (const nextX of [x - 1, x + 1, ...teleport[x]]) {
        if (!nextX) continue;
        if (nextX <= 0 || nextX > n) continue;
        if (check[nextX]) continue;
        if (nextX === e) return time;
        check[nextX] = 1;
        queue.push(nextX);
      }
    }
    time += 1;
  }
};
console.log(bfs(s));
