const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1976.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();
const m = +input.shift();
input = input.map(item => item.split(' ').map(Number));
const plan = input.pop();

let answer = 'YES';

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

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[i][j]) {
      if (Find(i + 1) === Find(j + 1)) continue;
      Union(i + 1, j + 1);
    }
  }
}

for (let i = 0; i < plan.length - 1; i++) {
  if (Find(plan[i]) !== Find(plan[i + 1])) {
    answer = 'NO';
    break;
  }
}

console.log(answer);
