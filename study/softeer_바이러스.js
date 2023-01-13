const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solve = (k, p, n) => {
  k = BigInt(k);
  for (let i = 0; i < n; i++) {
    k = (k * BigInt(p)) % BigInt(1000000007);
  }

  console.log(Number(k));
};

rl.on('line', line => {
  const [k, p, n] = line.split(' ').map(Number);

  solve(k, p, n);
});
