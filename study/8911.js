const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/8911.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
for (let i = 1; i < input.length; i++) {
  let minX = 0;
  let maxX = 0;
  let minY = 0;
  let maxY = 0;
  let x = 0;
  let y = 0;
  let direction = 0;
  for (const path of input[i]) {
    if (path === 'F') {
      x += dx[direction];
      y += dy[direction];
    } else if (path === 'B') {
      x += dx[direction + 2 > 3 ? direction - 2 : direction + 2];
      y += dy[direction + 2 > 3 ? direction - 2 : direction + 2];
    } else if (path === 'L') direction = direction - 1 < 0 ? 3 : direction - 1;
    else direction = direction + 1 > 3 ? 0 : direction + 1;

    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    minY = Math.min(minY, y);
    maxY = Math.max(maxY, y);
  }
  console.log((maxX - minX) * (maxY - minY));
}
