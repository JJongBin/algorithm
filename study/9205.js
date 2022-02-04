const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/9205.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map(item => item.split(' ').map(Number));

const t = input.shift();

for (let k = 0; k < input.length; k += +input[k][0] + 3) {
  const pos = [];
  for (let i = k + 1; i < k + +input[k][0] + 3; i++) {
    pos.push(input[i]);
  }

  const bfs = () => {
    const check = new Array(pos.length).fill(0);
    const queue = [];
    queue.push(pos[0]);
    check[0] = 1;

    while (queue.length) {
      let [x, y] = queue.shift();
      for (let j = 0; j < pos.length; j++) {
        if (check[j] === 1) continue;

        let [xx, yy] = pos[j];
        if (Math.abs(xx - x) + Math.abs(yy - y) <= 1000) {
          if (j === pos.length - 1) return 'happy';
          queue.push([xx, yy]);
          check[j] = 1;
        }
      }
    }
    return 'sad';
  };

  console.log(bfs());
}
