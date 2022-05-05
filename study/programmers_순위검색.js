function solution(info, query) {
  var answer = [];
  const infoLen = info.length;
  const developers = {};

  // 재귀적으로 모든 경우의 수를 객체에 배열로 저장
  const infoFormatting = (nowInfo, idx, score) => {
    const key = nowInfo.join('');
    if (developers[key]) developers[key].push(score);
    else developers[key] = [score];

    for (let i = idx; i < 4; i++) {
      const temp = [...nowInfo];
      if (temp[i] === '-') break;
      temp[i] = '-';
      infoFormatting(temp, idx + 1, score);
    }
  };

  // 모든 경우 developers 객체에 등록
  for (let i = 0; i < infoLen; i++) {
    const nowInfo = info[i].split(' ');
    const score = +nowInfo.pop();
    infoFormatting(nowInfo, 0, score);
  }

  // 경우수가 얼마 되지 않기 때문에 모든 경우를 정렬시켜준다
  for (const d of Object.keys(developers)) {
    developers[d].sort((a, b) => a - b);
  }

  // 쿼리마다 동작
  for (const q of query) {
    const req = q.split(/ and | /);
    const score = +req.pop();
    const key = req.join('');

    // 배열이 존재하는 경우 이분탐색으로 검색
    if (developers[key]) {
      const arr = developers[key];
      let left = 0;
      let right = arr.length - 1;
      let mid = Math.floor((left + right) / 2);
      while (left <= right) {
        if (arr[mid] >= score) right = mid - 1;
        else left = mid + 1;
        mid = Math.floor((left + right) / 2);
      }
      answer.push(arr.length - mid - 1);
    } else answer.push(0);
  }

  return answer;
}
console.log(
  solution(
    ['java backend junior pizza 150'],
    [
      'java and backend and junior and pizza 100',
      'python and frontend and senior and chicken 200',
      'cpp and - and senior and pizza 250',
      '- and backend and senior and - 150',
      '- and - and - and chicken 100',
      '- and - and - and - 150',
    ]
  )
);
// console.log(
//   solution(
//     [
//       'java backend junior pizza 150',
//       'python frontend senior chicken 210',
//       'python frontend senior chicken 150',
//       'cpp backend senior pizza 260',
//       'java backend junior chicken 80',
//       'python backend senior chicken 50',
//     ],
//     [
//       'java and backend and junior and pizza 500',
//       'python and frontend and senior and chicken 200',
//       'cpp and - and senior and pizza 250',
//       '- and backend and senior and - 150',
//       '- and - and - and chicken 100',
//       '- and - and - and - 150',
//     ]
//   )
// );
