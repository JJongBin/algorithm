const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  input = input.map(item => item.split(' ').map(Number));
  const [n, m] = input[0];
  const answer = [];
  const unf = Array.from({ length: n + 1 }, (v, i) => i);

  const Find = v => {
    if (v === unf[v]) return v;
    else return (unf[v] = Find(unf[v]));
  };

  const Union = (a, b) => {
    let fa = Find(a);
    let fb = Find(b);
    if (fa !== fb) unf[fa] = fb;
  };

  for (let i = 1; i < input.length; i++) {
    const [check, a, b] = input[i];
    if (!check) Union(a, b);
    else answer.push(Find(a) === Find(b) ? 'YES' : 'NO');
  }
  console.log(answer.join('\n'));
  process.exit();
});
