const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

const solve = () => {
  const str = input.pop();
  const [n, k] = input.pop().split(' ').map(Number);

  const check = new Array(n).fill(0);

  let answer = 0;
  for (let i = 0; i < n; i++) {
    if (str[i] === 'P') {
      for (let j = i - k; j <= i + k; j++) {
        if (j < 0 || j >= n) continue;
        if (str[j] === 'H' && !check[j]) {
          check[j] = 1;
          answer++;
          break;
        }
      }
    }
  }

  console.log(answer);
};

rl.on('line', line => {
  input.push(line);
  if (input.length >= 2) solve();
});
