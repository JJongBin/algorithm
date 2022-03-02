const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/14003.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();
nums = input[0].split(' ').map(Number);

const arr = [nums[0]];
const arrIdx = [0];

for (let i = 1; i < n; i++) {
  const arrLen = arr.length - 1;

  if (nums[i] <= arr[arrLen]) {
    let left = 0;
    let right = arrLen;

    while (left < right) {
      const mid = parseInt((right + left) / 2);
      if (arr[mid] < nums[i]) left = mid + 1;
      else if (arr[mid] >= nums[i]) right = mid;
    }
    arr[left] = nums[i];
    arrIdx.push(left);
  } else if (nums[i] > arr[arrLen]) {
    arr.push(nums[i]);
    arrIdx.push(arr.length - 1);
  }
}

let answer = arr.length;
console.log(answer);

answer--;
const answerArr = [];
for (let i = arrIdx.length - 1; i >= 0; i--) {
  if (arrIdx[i] === answer) {
    answerArr.push(nums[i]);
    answer--;
  }
  if (answer < 0) break;
}
console.log(answerArr.reverse().join(' '));
