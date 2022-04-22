const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/17140.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.map(item => item.split(' ').map(Number));

let answer = -1;
const [r, c, k] = input.shift();

// R 연산
const rCalc = (rLen, cLen) => {
  for (let i = 0; i < rLen; i++) {
    const hash = new Map();
    for (let j = 0; j < cLen; j++) {
      if (!input[i][j]) continue;
      hash.set(input[i][j], (hash.get(input[i][j]) || 0) + 1);
    }
    input[i] = [...hash.entries()]
      .sort((a, b) => {
        if (a[1] !== b[1]) return a[1] - b[1];
        return a[0] - b[0];
      })
      .flat();
  }
  let len = 0;
  for (let i = 0; i < rLen; i++) len = Math.max(input[i].length, len);
  for (let i = 0; i < rLen; i++) {
    const tempLen = input[i].length;
    if (tempLen < len) {
      for (let j = 0; j < len - tempLen; j++) input[i].push(0);
    }
  }
};

// C 연산
const cCalc = (rLen, cLen) => {
  const newArr = [];
  for (let i = 0; i < cLen; i++) {
    const hash = new Map();
    for (let j = 0; j < rLen; j++) {
      if (!input[j][i]) continue;
      hash.set(input[j][i], (hash.get(input[j][i]) || 0) + 1);
    }
    const tempArr = [...hash.entries()]
      .sort((a, b) => {
        if (a[1] !== b[1]) return a[1] - b[1];
        return a[0] - b[0];
      })
      .flat();
    newArr.push(tempArr);
  }
  let len = 0;
  for (let i = 0; i < cLen; i++) len = Math.max(newArr[i].length, len);
  for (let i = 0; i < cLen; i++) {
    const tempLen = newArr[i].length;
    if (tempLen < len) {
      for (let j = 0; j < len - tempLen; j++) newArr[i].push(0);
    }
  }

  const lotatedArr = [];
  for (let i = 0; i < newArr[0].length; i++) {
    const row = [];
    for (let j = 0; j < newArr.length; j++) row.push(newArr[j][i]);
    lotatedArr.push(row);
  }
  input = lotatedArr;
};

for (let i = 0; i < 101; i++) {
  const rLen = input.length;
  const cLen = input[0].length;
  if (r - 1 < rLen && c - 1 < cLen && input[r - 1][c - 1] === k) {
    answer = i;
    break;
  }

  if (rLen >= cLen) rCalc(rLen, cLen);
  else cCalc(rLen, cLen);

  const afterRLen = input.length;
  const afterCLen = input[0].length;
  if (afterRLen > 100) input = input.slice(0, 100);
  if (afterCLen > 100) input = input.map(item => item.slice(0, 100));
}

console.log(answer);
