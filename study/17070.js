const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/2251.txt';

const inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const bottle = inputs[0].split(' ').map(Number);
const queue = [[0, 0, bottle[2]]];

const answer = new Set();
answer.add(bottle[2]);
const checkHash = new Set();
checkHash.add(queue[0].join('-'));

while (queue.length) {
  const target = queue.pop();

  // 선택한 따를 물
  for (let i = 0; i < 3; i++) {
    if (!target[i]) continue;

    // 어디에 따르는가?
    for (let j = 0; j < 3; j++) {
      const water = [...target];
      if (i === j) continue;
      if (water[j] === bottle[j]) continue;

      if (water[i] <= bottle[j] - water[j]) {
        water[j] += water[i];
        water[i] = 0;
      } else {
        water[i] -= bottle[j] - water[j];
        water[j] = bottle[j];
      }

      const check = water.join('-');
      if (checkHash.has(check)) continue;

      checkHash.add(check);
      if (!water[0]) answer.add(water[2]);
      queue.push([...water]);
    }
  }
}

console.log([...answer.values()].sort((a, b) => a - b).join(' '));
