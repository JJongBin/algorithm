const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/14891.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

let answer = 0;

const gear = {};
const gearPos = {};

for (let i = 0; i < 4; i++) {
  gear[i + 1] = input[i].split('').map(Number);
  gearPos[i + 1] = [2, 6, 0];
}

const changeGearPos = (gearNum, direction, check) => {
  check[gearNum] = 1;
  const nowGear = [...gear[gearNum]];
  const nowGearPos = [...gearPos[gearNum]];

  // 현재 기어 회전
  if (direction < 0) {
    gearPos[gearNum][0] = gearPos[gearNum][0] + 1 > 7 ? 0 : gearPos[gearNum][0] + 1;
    gearPos[gearNum][1] = gearPos[gearNum][1] + 1 > 7 ? 0 : gearPos[gearNum][1] + 1;
    gearPos[gearNum][2] = gearPos[gearNum][2] + 1 > 7 ? 0 : gearPos[gearNum][2] + 1;
  } else {
    gearPos[gearNum][0] = gearPos[gearNum][0] - 1 < 0 ? 7 : gearPos[gearNum][0] - 1;
    gearPos[gearNum][1] = gearPos[gearNum][1] - 1 < 0 ? 7 : gearPos[gearNum][1] - 1;
    gearPos[gearNum][2] = gearPos[gearNum][2] - 1 < 0 ? 7 : gearPos[gearNum][2] - 1;
  }
  if (gearNum - 1 >= 1 && gearNum - 1 <= 3) {
    // 왼쪽에 위치한 기어를 확인
    if (gear[gearNum - 1][gearPos[gearNum - 1][0]] !== nowGear[nowGearPos[1]] && check[gearNum - 1] !== 1) {
      changeGearPos(gearNum - 1, -direction, check);
    }
  }
  if (gearNum + 1 >= 2 && gearNum + 1 <= 4) {
    // 오른쪽에 위치한 기어를 확인
    if (gear[gearNum + 1][gearPos[gearNum + 1][1]] !== nowGear[nowGearPos[0]] && check[gearNum + 1] !== 1) {
      changeGearPos(gearNum + 1, -direction, check);
    }
  }
};

for (let i = 5; i < input.length; i++) {
  const [gearNum, direction] = input[i].split(' ').map(Number);
  const check = new Array(5).fill(0);
  changeGearPos(gearNum, direction, check);
}

for (let i = 1; i < 5; i++) {
  answer += gear[i][gearPos[i][2]] ? 2 ** (i - 1) : 0;
}
console.log(answer);
