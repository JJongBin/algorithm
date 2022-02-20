const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/21608.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();
const students = input.map(item => item.split(' ').map(Number));
let answer = 0;

// 자리에 누가 앉는지 저장할 배열
const place = [...Array(n)].map(e => new Array(n).fill(0));

// flood fill
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

// 좋아하는 학생을 객체에 배열형태로 저장
const likeStudents = {};

for (const student of students) {
  // 각 학생별로 체크 배열을 가짐
  const check = new Array(n ** 2 + 1).fill(0);

  for (const s of student) check[s] = 1;
  likeStudents[student[0]] = check;
}

for (let s = 0; s < n ** 2; s++) {
  // 조건 1 객체 (key: 좋아하는 사람들의 수 / value: 주위에 좋아하는 사람들이 key명인 자리들을 배열로)
  const constraint = {};

  // 모든 자리 탐색
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (place[i][j] !== 0) continue;

      // 자리별 주변 좋아하는 학생확인 - likeStu를 증가시켜서 constraint 객체의 key값을 구함
      let likeStu = 0;
      for (let k = 0; k < 4; k++) {
        const xx = i + dx[k];
        const yy = j + dy[k];
        if (xx >= 0 && xx < n && yy >= 0 && yy < n) {
          // 만약 좋아하는 사람을 저장한 객체에 존재한다면
          if (likeStudents[students[s][0]][place[xx][yy]]) likeStu++;
        }
      }
      // 좋아하는 학생 수만큼 객체에 넣음
      constraint[likeStu] = constraint[likeStu] ? [...constraint[likeStu], [i, j]] : [[i, j]];
    }
  }

  // 좋아하는 사람이 가장 많은 배열을 선택하기 위함
  let maxNum = Math.max(...Object.keys(constraint));

  // 주변에 빈자리가 가장 많은 자리를 구하기 위함 (constraint과 형식은 같음)
  const constraint2 = {};

  // 좋아하는 사람이 가장 많은 배열을 temp에 할당 후 주변 빈자리를 계산
  const temp = [...Object.values(constraint[maxNum])];
  for (const pos of temp) {
    // emptyPlace는 주변 빈자리의 개수
    let emptyPlace = 0;
    for (let k = 0; k < 4; k++) {
      const xx = pos[0] + dx[k];
      const yy = pos[1] + dy[k];
      if (xx >= 0 && xx < n && yy >= 0 && yy < n) {
        if (!place[xx][yy]) emptyPlace++;
      }
    }

    constraint2[emptyPlace] = constraint2[emptyPlace]
      ? [...constraint2[emptyPlace], [pos[0], pos[1]]]
      : [[pos[0], pos[1]]];
  }

  // 주변 빈자리가 가장 많은 자리를 구하기 위함
  maxNum = Math.max(...Object.keys(constraint2));

  const studentPos = constraint2[maxNum][0];
  place[studentPos[0]][studentPos[1]] = students[s][0];
}

// 점수 계산을 위한 객체
const score = {
  0: 0,
  1: 1,
  2: 10,
  3: 100,
  4: 1000,
};

// 각 자리를 순회
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // 주변의 좋아하는 사람이 얼마나 있는지를 계산 (이전에 과정과 통합할 수 있겠는데?)
    let likeStu = 0;
    for (let k = 0; k < 4; k++) {
      const xx = i + dx[k];
      const yy = j + dy[k];
      if (xx >= 0 && xx < n && yy >= 0 && yy < n) {
        if (likeStudents[place[i][j]][place[xx][yy]]) likeStu++;
      }
    }
    answer += score[likeStu];
  }
}
console.log(answer);
