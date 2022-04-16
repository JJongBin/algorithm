const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1068.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

let answer = 0;
const n = +input.shift();
const arr = input.shift().split(' ').map(Number);
const len = arr.length;
const deleteNode = +input.shift();

const dfs = deleteNode => {
  arr[deleteNode] = null;
  for (let i = 0; i < len; i++) {
    if (deleteNode === arr[i]) dfs(i);
  }
};

dfs(deleteNode);
const check = new Set();

for (let i = 0; i < len; i++) {
  if (arr[i] !== null) check.add(arr[i]);
}

for (let i = 0; i < len; i++) {
  if (!check.has(i) && arr[i] !== null) answer++;
}

console.log(answer);
