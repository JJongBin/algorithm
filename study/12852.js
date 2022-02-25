const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/12852.txt';

let n = +fs.readFileSync(filePath).toString().trim().split('\n')[0];
// let L = 1;

// const bfs = () => {
//   const queue = [[n]];
//   const check = {};

//   while (queue.length) {
//     const len = queue.length;
//     for (let i = 0; i < len; i++) {
//       const nums = queue.shift();
//       const arr = [];

//       if (nums[0] % 3 === 0) arr.push([nums[0] / 3, ...nums]);
//       if (nums[0] % 2 === 0) arr.push([nums[0] / 2, ...nums]);
//       arr.push([nums[0] - 1, ...nums]);

//       for (const next of arr) {
//         if (next[0] === 1) return next;

//         if (!check[next[0]]) {
//           check[next[0]] = 1;
//           queue.push(next);
//         }
//       }
//     }
//     L++;
//   }
// };
// const answer = bfs();

// console.log(L);
// console.log(answer.reverse().join(' '));

const dp = new Array(100001).fill(0);
const arrs = new Array(100001).fill([]);

for (let i = 2; i < n + 1; i++) {
  dp[i] = dp[i - 1] + 1;
  arrs[i] = [i, ...arrs[i - 1]];

  if (i % 3 === 0 && dp[i / 3] + 1 < dp[i]) {
    dp[i] = dp[i / 3] + 1;
    arrs[i] = [i, ...arrs[i / 3]];
  }
  if (i % 2 === 0 && dp[i / 2] + 1 < dp[i]) {
    dp[i] = dp[i / 2] + 1;
    arrs[i] = [i, ...arrs[i / 2]];
  }
}
console.log(dp[n]);
console.log(arrs[n].join(' ') + ' 1');
