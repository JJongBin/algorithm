const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const changeMinute = time => {
  const [h, m] = time.split(':');

  return +h * 60 + +m;
};

const arr = [];
rl.on('line', line => {
  const [start, end] = line.split(' ');
  const time = changeMinute(end) - changeMinute(start);

  arr.push(time);

  if (arr.length >= 5) console.log(arr.reduce((a, b) => a + b, 0));
});
