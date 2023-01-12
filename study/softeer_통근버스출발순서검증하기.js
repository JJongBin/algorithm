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

const input = [];

const solve = () => {
  const disable = [];
  const arr = input.pop().split(' ').map(Number);
  const n = +input.pop();

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      if (arr[i] >= arr[j]) continue;
      for (let k = j + 1; k < n; k++) {
        if (arr[i] > arr[k]) disable.push(`${i} ${j} ${k}`);
      }
    }
  }

  console.log(disable.length);
};

rl.on('line', line => {
  input.push(line);
  if (input.length >= 2) solve();
});
