/////////////////////////////////////////////////////////////////////////////////////////////
// 일부 테스트케이스의 마지막에 개행 문자(\n)가 포함되어 있을 수 있습니다.
// 따라서, 예상치 못한 오답 처리를 방지하기 위해서
// fs모듈을 사용하여 입력을 받을 땐, **반드시** trim()을 사용하여 여백을 제거 하거나
// readline 모듈을 통해 입력을 받으시길 바랍니다.
// 해당 내용을 숙지 하셨다면, 주석을 지우고 문제풀이를 하셔도 무방합니다.
/////////////////////////////////////////////////////////////////////////////////////////////const readline = require('readline');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solve = str => {
  const arr = str.split(' ').map(Number);
  let check = arr[0] - arr[1];

  if (check ** 2 !== 1) {
    console.log('mixed');
    return;
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] - arr[i] !== check) {
      console.log('mixed');
      return;
    }
  }

  if (check === -1) console.log('ascending');
  else console.log('descending');
};

rl.on('line', line => {
  solve(line);
});
