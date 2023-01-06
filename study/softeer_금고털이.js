const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputW = 0;
let inputN = 0;
const input = [];

const solve = () => {
  let answer = 0;
  const arr = input.map(i => i.split(' ').map(Number)).sort((a, b) => b[1] - a[1]);

  for (const [w, v] of arr) {
    if (inputW <= 0) break;

    const availableW = inputW < w ? inputW : w;
    answer += availableW * v;
    inputW -= availableW;
  }
  console.log(answer);
};

rl.on('line', line => {
  if (!inputW) {
    const [w, n] = line.split(' ');
    inputW = +w;
    inputN = +n;
  } else {
    input.push(line);
    if (input.length === inputN) solve();
  }
});
