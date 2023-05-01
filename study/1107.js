const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1107.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = input[0];
if (N === '100') console.log(0);
else {
  const disableBtn = +input[1] ? new Set(input[2].split(' ')) : new Set();
  let cnt = Math.abs(+N - 100);

  outer: for (let i = 0; i <= 1000000; i++) {
    const check = String(i);
    for (let j = 0; j < check.length; j++) {
      if (disableBtn.has(check[j])) continue outer;
    }

    const compare = Math.abs(+N - i) + check.length;
    cnt = Math.min(compare, cnt);
  }

  console.log(cnt);
}
