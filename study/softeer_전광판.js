const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const structureOfLight = {
  x: [0, 0, 0, 0, 0, 0, 0],
  0: [1, 1, 1, 1, 1, 1, 0],
  1: [0, 0, 1, 1, 0, 0, 0],
  2: [0, 1, 1, 0, 1, 1, 1],
  3: [0, 1, 1, 1, 1, 0, 1],
  4: [1, 0, 1, 1, 0, 0, 1],
  5: [1, 1, 0, 1, 1, 0, 1],
  6: [1, 1, 0, 1, 1, 1, 1],
  7: [1, 1, 1, 1, 0, 0, 0],
  8: [1, 1, 1, 1, 1, 1, 1],
  9: [1, 1, 1, 1, 1, 0, 1],
};

let n;
const input = [];

const solve = () => {
  for (const tc of input) {
    const [prev, next] = tc.split(' ').map(num => num.padStart(5, 'x'));

    let cnt = 0;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 7; j++) {
        if (structureOfLight[prev[i]][j] !== structureOfLight[next[i]][j]) {
          cnt++;
        }
      }
    }

    console.log(cnt);
  }
};

rl.on('line', line => {
  if (!n) n = +line;
  else {
    input.push(line);
    if (input.length >= n) solve();
  }
});
