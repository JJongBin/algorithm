const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/10974.txt';

let input = fs.readFileSync(filePath).toString().trimEnd().split('\n');

const n = +input[0];
const nums = new Array(n).fill(0).map((n, i) => i + 1);
const check = new Array(n).fill(0);

const selectNumber = arr => {
  if (arr.length === n) console.log(arr.join(' '));
  for (let i = 0; i < n; i++) {
    if (check[i] === 0) {
      arr.push(nums[i]);
      check[i] = 1;
      selectNumber(arr);
      check[i] = 0;
      arr.pop();
    }
  }
};

selectNumber([]);
