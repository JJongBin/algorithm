const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/20040.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map(item => item.split(' ').map(Number));

let answer = 0;
const [n, m] = input[0];
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
  const [a, b] = input[i];
  if (Find(a) === Find(b)) {
    answer = i;
    break;
  }
  Union(a, b);
}
console.log(answer);
