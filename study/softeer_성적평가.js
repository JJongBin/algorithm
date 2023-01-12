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
  const n = input.shift()[0][0];

  const total = [];
  for (let i = 0; i < n; i++) {
    const data = [input[0][i][0] + input[1][i][0] + input[2][i][0], total.length];
    total.push(data);
  }
  input.push(total);

  for (let i = 0; i < 4; i++) {
    const answer = new Array(n);
    const arr = input[i].sort((a, b) => b[0] - a[0]);
    let cnt = 0;
    let temp = 0;
    let compare = Infinity;

    for (let j = 0; j < +n; j++) {
      const [score, idx] = arr[j];

      if (score !== compare) {
        compare = score;
        cnt++;
        cnt += temp;
        temp = 0;
      } else temp++;

      answer[idx] = cnt;
    }

    console.log(answer.join(' '));
  }
};

rl.on('line', line => {
  const data = line.split(' ').map((v, idx) => [+v, idx]);
  input.push(data);

  if (input.length >= 4) solve();
});
