const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/5052.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

for (let k = 1; k < input.length; k++) {
  let answer = 'YES';
  const n = +input[k];
  const list = [];
  for (let i = k + 1; i < k + n + 1; i++) list.push(input[i]);
  list.sort();

  outer: for (let i = 0; i < list.length - 1; i++) {
    if (list[i].length > list[i + 1].length) continue;
    for (let j = 0; j < list[i].length; j++) {
      if (list[i][j] !== list[i + 1][j]) continue outer;
    }
    answer = 'NO';
  }
  console.log(answer);
  k += n;
}
