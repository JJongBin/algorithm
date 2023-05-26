const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/12891.txt';

const inputs = fs.readFileSync(filePath).toString().trim().split('\n');

let answer = 0;
const [s, p] = inputs.shift().split(' ').map(Number);
const strDNA = inputs.shift();
const DNA = ['A', 'C', 'G', 'T'];
const cntDNA = inputs.shift().split(' ').map(Number);

const checkCntDNA = {};
for (let i = 0; i < 4; i++) checkCntDNA[DNA[i]] = cntDNA[i];

const haveCntDNA = { A: 0, C: 0, G: 0, T: 0 };

let right = 0;
for (let left = 0; left < s - p + 1; left++) {
  while (right - left < p) {
    haveCntDNA[strDNA[right]] += 1;
    right += 1;
  }

  let check = true;
  for (const d of DNA) {
    if (checkCntDNA[d] > haveCntDNA[d]) {
      check = false;
      break;
    }
  }

  if (check) answer += 1;

  haveCntDNA[strDNA[left]] -= 1;
}

console.log(answer);
