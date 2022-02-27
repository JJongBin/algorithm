const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/4386.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];
input = input.map(item => item.split(' ').map(Number));

let answer = 0;
const link = [];
const unf = Array.from({ length: n + 1 }, (v, i) => i);

for (let i = 1; i < n + 1; i++) {
  for (let j = i + 1; j < n + 1; j++) {
    link.push([i, j, +Math.sqrt((input[j][0] - input[i][0]) ** 2 + (input[j][1] - input[i][1]) ** 2).toFixed(2)]);
  }
}
link.sort((a, b) => a[2] - b[2]);

const Find = v => {
  if (v === unf[v]) return v;
  else return Find(unf[v]);
};

const Union = (a, b) => {
  let fa = Find(a);
  let fb = Find(b);
  unf[fa] = fb;
};

for (let i = 0; i < link.length; i++) {
  if (Find(link[i][0]) === Find(link[i][1])) continue;
  Union(link[i][0], link[i][1]);
  answer += +link[i][2];
}
console.log(answer);
