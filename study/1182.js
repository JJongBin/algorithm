const { timeStamp } = require('console');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1182.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map(item => item.split(' ').map(Number));

const [n, s] = input.shift();
let answer = 0;
input = input[0];

const dfs = (idx, arr, sum) => {
  if (s === sum && arr.length > 0) answer++;
  for (let i = idx; i < n; i++) {
    arr.push(input[i]);
    dfs(i + 1, arr, sum + input[i]);
    arr.pop();
  }
};

dfs(0, [], 0);
console.log(answer);
