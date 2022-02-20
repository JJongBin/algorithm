const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/15661.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();
const ability = input.map(item => item.split(' ').map(Number));
const team = [];
const check = new Array(n).fill(0);
let answer = Infinity;

const checkAbility = check => {
  let score1 = 0;
  let score2 = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (check[i] === 1 && check[j] === 1) score1 += ability[i][j] + ability[j][i];
      if (check[i] === 0 && check[j] === 0) score2 += ability[i][j] + ability[j][i];
    }
  }
  return Math.abs(score1 - score2);
};

const shareTeam = s => {
  if (team.length <= n / 2 && team.length >= 2) {
    const diff = checkAbility(check);
    answer = Math.min(diff, answer);
  }

  for (let i = s; i < n; i++) {
    team.push(i);
    check[i] = 1;
    shareTeam(i + 1);
    check[i] = 0;
    team.pop();
  }
};

shareTeam(0);
console.log(answer);
