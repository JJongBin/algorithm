const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solve = num => {
  let point = 2;

  for (let i = 0; i < +num; i++) point = point * 2 - 1;

  console.log(point ** 2);
};

rl.on('line', line => {
  solve(line);
});
