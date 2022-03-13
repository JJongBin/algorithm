const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/14226.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const s = +input[0];
const check = [...Array(s + 1)].map(_ => new Array(s + 1).fill(0));

const bfs = () => {
  let answer = Infinity;
  const queue = [[1, 0]];

  while (queue.length) {
    const [emoticon, clipBoard] = queue.shift();

    if (!check[emoticon][emoticon]) {
      check[emoticon][emoticon] = check[emoticon][clipBoard] + 1;
      queue.push([emoticon, emoticon]);
    }
    if (emoticon + clipBoard <= s && !check[emoticon + clipBoard][clipBoard]) {
      check[emoticon + clipBoard][clipBoard] = check[emoticon][clipBoard] + 1;
      queue.push([emoticon + clipBoard, clipBoard]);
    }
    if (emoticon - 1 > 0 && !check[emoticon - 1][clipBoard]) {
      check[emoticon - 1][clipBoard] = check[emoticon][clipBoard] + 1;
      queue.push([emoticon - 1, clipBoard]);
    }
  }
  for (let i = 1; i < s + 1; i++) {
    if (check[s][i]) answer = Math.min(answer, check[s][i]);
  }

  return answer;
};

console.log(bfs());
