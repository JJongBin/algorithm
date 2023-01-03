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

let inputCnt = 0;
const input = [];
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];
const answer = [0];

const bfs = (i, j, check) => {
  const queue = [[i, j]];
  let cnt = 1;
  check[i][j] = 1;

  while (queue.length) {
    const [x, y] = queue.pop();
    for (let k = 0; k < 4; k++) {
      const xx = x + dx[k];
      const yy = y + dy[k];

      if (xx < 0 || xx >= inputCnt || yy < 0 || yy >= inputCnt) continue;
      if (+check[xx][yy]) continue;
      check[xx][yy] = 1;

      if (!+input[xx][yy]) continue;
      queue.push([xx, yy]);
      cnt++;
    }
  }

  return cnt;
};

const solve = check => {
  for (let i = 0; i < inputCnt; i++) {
    for (let j = 0; j < inputCnt; j++) {
      if (+input[i][j] && !+check[i][j]) {
        const cnt = bfs(i, j, check);
        answer.push(cnt);
        answer[0]++;
      }
    }
  }

  console.log(answer.shift());
  answer.sort((a, b) => a - b);
  console.log(answer.join('\n'));
};

rl.on('line', line => {
  if (!inputCnt) inputCnt = +line;
  else {
    input.push(line);
    if (input.length === inputCnt) {
      const check = [...Array(inputCnt)].map(_ => new Array(inputCnt).fill(0));
      solve(check);
    }
  }
});
