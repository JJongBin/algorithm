const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/16938.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map(item => item.split(' ').map(Number));

const [n, l, r, x] = input[0];
const diffs = input[1];
const selectProblemDiffs = [];

let answer = 0;
const selectProblem = (diff, idx) => {
  if (diffs.length >= 2) {
    const min = Math.min(...selectProblemDiffs);
    const max = Math.max(...selectProblemDiffs);
    if (max - min >= x && l <= diff && r >= diff) answer++;
  }

  for (let i = idx; i < n; i++) {
    selectProblemDiffs.push(diffs[i]);
    diff += diffs[i];
    selectProblem(diff, i + 1);
    diff -= diffs[i];
    selectProblemDiffs.pop();
  }
};

selectProblem(0, 0);
console.log(answer);
