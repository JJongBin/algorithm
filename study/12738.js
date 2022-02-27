const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/12738.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();
nums = input[0].split(' ').map(Number);

const arr = [nums[0]];

for (let i = 1; i < n; i++) {
  const arrLen = arr.length - 1;
  if (nums[i] < arr[arrLen]) {
    let left = 0;
    let right = arrLen;
    let temp = Infinity;

    while (left <= right) {
      const mid = parseInt((right + left) / 2);
      if (arr[mid] < nums[i]) left = mid + 1;
      else if (arr[mid] >= nums[i]) {
        if (temp > mid) temp = mid;
        right = mid - 1;
      }
    }
    arr[temp] = nums[i];
  } else if (nums[i] > arr[arrLen]) {
    arr.push(nums[i]);
  }
}

console.log(arr.length);
