const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/13913.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const queue = [n];
const check = new Array(100001).fill(0);
const dist = new Array(100001).fill(0);

const bfs = () => {
  if (n === k) return 0;
  check[n] = 1;
  let cnt = 1;

  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const x = queue.shift();
      for (const next of [x * 2, x + 1, x - 1]) {
        if (next >= 0 && next <= 100000 && !check[next]) {
          if (!dist[next]) dist[next] = x;
          if (next === k) return cnt;
          queue.push(next);
          check[next] = 1;
        }
      }
    }
    cnt++;
  }
};
const answer = bfs();

const answerArr = [];
let temp = k;
for (let i = 0; i < answer + 1; i++) {
  answerArr.push(temp);
  temp = dist[temp];
}

console.log(answer);
console.log(answerArr.reverse().join(' '));
