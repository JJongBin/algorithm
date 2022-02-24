const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/16953.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [a, b] = input[0].split(' ').map(Number);

const bfs = () => {
  const queue = [a];
  let L = 1;

  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const now = queue.shift();

      for (const next of [+(now + `1`), now * 2]) {
        if (next === b) return L + 1;
        else if (next > 1000000000) continue;
        else queue.push(next);
      }
    }
    L++;
  }
};

const answer = bfs();

console.log(answer ? answer : -1);
