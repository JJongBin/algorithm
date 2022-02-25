const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/20055.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, k] = input.shift().split(' ').map(Number);
input = input[0].split(' ').map(Number);

const robot = new Array(2 * n).fill(0);
const pos = [0, n - 1];
let breakdown = 0;
let answer = 0;

while (breakdown < k) {
  // robot 내림
  if (robot[pos[1]] === 1) robot[pos[1]] = 0;

  // 회전
  pos[0] = pos[0] <= 0 ? 2 * n - 1 : pos[0] - 1;
  pos[1] = pos[1] <= 0 ? 2 * n - 1 : pos[1] - 1;

  // robot 내림
  if (robot[pos[1]] === 1) robot[pos[1]] = 0;

  let nowPos = pos[1];
  // 로봇의 이동
  for (let i = 1; i < robot.length / 2; i++) {
    nowPos = nowPos - 1 < 0 ? 2 * n - 1 : nowPos - 1;
    const nextPos = nowPos + 1 >= 2 * n ? 0 : nowPos + 1;

    if (input[nextPos] && robot[nowPos] === 1 && robot[nextPos] === 0) {
      // 기존위치에서 이동
      robot[nowPos] = 0;
      robot[nextPos] = 1;

      // 이동할 위치의 내구도 감소 및 검사
      input[nextPos] -= 1;
      breakdown = input[nextPos] ? breakdown : breakdown + 1;
    }
  }

  // robot 올림
  if (input[pos[0]] && !robot[pos[0]]) {
    robot[pos[0]] = 1;
    input[pos[0]] -= 1;
    breakdown = input[pos[0]] ? breakdown : breakdown + 1;
  }

  answer++;
}

console.log(answer);
