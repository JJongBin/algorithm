/////////////////////////////////////////////////////////////////////////////////////////////
// 일부 테스트케이스의 마지막에 개행 문자(\n)가 포함되어 있을 수 있습니다.
// 따라서, 예상치 못한 오답 처리를 방지하기 위해서
// fs모듈을 사용하여 입력을 받을 땐, **반드시** trim()을 사용하여 여백을 제거 하거나
// readline 모듈을 통해 입력을 받으시길 바랍니다.
// 해당 내용을 숙지 하셨다면, 주석을 지우고 문제풀이를 하셔도 무방합니다.
/////////////////////////////////////////////////////////////////////////////////////////////

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, m;
let input = [];

const solve = () => {
  const check = new Array(101).fill(0);
  let totalDist1 = 1;
  for (let i = 0; i < n; i++) {
    const [dist, speed] = input[i].split(' ').map(Number);
    for (let j = totalDist1; j < totalDist1 + dist; j++) {
      check[j] = speed;
    }
    totalDist1 += dist;
  }

  let answer = 0;
  let totalDist2 = 1;
  for (let i = n; i < n + m; i++) {
    const [dist, speed] = input[i].split(' ').map(Number);
    for (let j = totalDist2; j < totalDist2 + dist; j++) {
      if (check[j] < speed) answer = Math.max(answer, speed - check[j]);
    }
    totalDist2 += dist;
  }

  console.log(answer);
};

rl.on('line', line => {
  if (!n) {
    const [nn, mm] = line.split(' ').map(Number);
    n = nn;
    m = mm;
  } else {
    input.push(line);
    if (input.length >= n + m) solve();
  }
});
