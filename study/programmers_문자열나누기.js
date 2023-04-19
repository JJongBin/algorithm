function solution(s) {
  var answer = 0;

  let str = '';
  let strCnt = 0;
  let otherCnt = 0;
  for (const ss of s) {
    if (!str) {
      str = ss;
      strCnt += 1;
      continue;
    }

    if (str === ss) strCnt += 1;
    else otherCnt += 1;

    if (strCnt === otherCnt) {
      answer += 1;
      str = '';
      strCnt = 0;
      otherCnt = 0;
    }
  }

  return str ? answer + 1 : answer;
}

console.log(solution('abracadabra'));
