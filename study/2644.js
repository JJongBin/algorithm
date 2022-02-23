const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/2644.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

let answer = 0;
const n = +input[0];
const m = +input[2];
const [t1, t2] = input[1].split(' ').map(Number);

const relation = {};

for (let i = 3; i < input.length; i++) {
  const [parent, child] = input[i].split(' ');
  relation[child] = relation[child] ? [...relation[child], parent] : [parent];
  relation[parent] = relation[parent] ? [...relation[parent], child] : [child];
}

const bfs = (start, target) => {
  const queue = [start];
  const check = new Array(n + 1).fill(0);
  let L = 0;

  while (queue.length) {
    const len = queue.length;
    L++;
    for (let i = 0; i < len; i++) {
      const now = queue.shift();
      for (const next of relation[now]) {
        if (+next === target) return L;
        if (!check[next]) {
          queue.push(next);
          check[next] = 1;
        }
      }
    }
  }
  return -1;
};

console.log(bfs(t1, t2));
