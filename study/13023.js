const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/13023.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.map(item => item.split(' ').map(item2 => +item2));

const [n, m] = input.shift();
let answer = 0;
const friends = {};
const check = new Array(n).fill(0);

for (let i = 0; i < m; i++) {
  friends[input[i][0]] = friends[input[i][0]] ? [...friends[input[i][0]], input[i][1]] : [input[i][1]];
  friends[input[i][1]] = friends[input[i][1]] ? [...friends[input[i][1]], input[i][0]] : [input[i][0]];
}

const dfs = (people, cnt) => {
  if (answer) return;
  if (cnt === 5) {
    answer = 1;
    return;
  } else {
    const friend = friends[people];
    const len = friend ? friend.length : 0;
    for (let k = 0; k < len; k++) {
      if (!check[friend[k]]) {
        check[friend[k]] = 1;
        dfs(friend[k], cnt + 1);
        check[friend[k]] = 0;
      }
    }
  }
};

for (let i = 0; i < n; i++) {
  check[i] = 1;
  dfs(i, 1);
  check[i] = 0;
  if (answer) break;
}

console.log(answer);
