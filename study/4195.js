const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/4195.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const answer = [];

for (let i = 1; i < input.length; i++) {
  const n = +input[i];

  const unf = Array.from({ length: n * 2 }, (_, i) => i);
  const networks = new Array(n * 2).fill(1);
  const idx = new Map();

  const Find = v => {
    if (v === unf[v]) return v;
    else return (unf[v] = Find(unf[v]));
  };

  const Union = (a, b) => {
    let fa = Find(a);
    let fb = Find(b);
    if (fa !== fb) {
      unf[fa] = fb;
      networks[fb] += networks[fa];
    }
  };

  for (let j = i + 1; j < i + n + 1; j++) {
    const [friend1, friend2] = input[j].split(' ');
    if (!idx.has(friend1)) idx.set(friend1, idx.size);
    if (!idx.has(friend2)) idx.set(friend2, idx.size);

    const a = idx.get(friend1);
    const b = idx.get(friend2);
    Union(a, b);

    answer.push(networks[Find(a)]);
  }
  i += n;
}
console.log(answer.join('\n'));
