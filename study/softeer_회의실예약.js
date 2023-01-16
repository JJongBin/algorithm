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
const input = [];

const solve = () => {
  const check = {};
  for (let i = 0; i < n; i++) {
    check[input[i]] = new Array(18).fill(0);
  }

  for (let i = n; i < n + m; i++) {
    const [room, start, end] = input[i].split(' ');

    for (let j = +start; j < +end; j++) {
      check[room][j] = 1;
    }
  }

  const arr = Object.entries(check).sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0));
  for (let i = 0; i < arr.length; i++) {
    const data = arr[i];
    const available = [];

    const [room, time] = data;
    let start;
    for (let i = 9; i < 18; i++) {
      if (!time[i]) {
        if (!start) start = i;
      } else {
        if (start) {
          available.push([start, i]);
          start = 0;
        }
      }
    }
    if (start) available.push([start, 18]);

    if (i) console.log('-----');
    console.log(`Room ${room}:`);

    if (available.length) console.log(`${available.length} available:`);
    else console.log(`Not available`);

    for (const schedule of available) {
      const [start, end] = schedule.map(t => String(t).padStart(2, '0'));
      console.log(`${start}-${end}`);
    }
  }
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
