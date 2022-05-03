function solution(dartResult) {
  const option = dartResult.split(/\d/g).filter(item => !!item);
  const score = dartResult
    .split(/\D+/g)
    .filter(item => !!item)
    .map(Number);

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < option[i].length; j++) {
      if (option[i][j] === 'D') score[i] **= 2;
      else if (option[i][j] === 'T') score[i] **= 3;
      else if (option[i][j] === '*') {
        if (i - 1 >= 0) score[i - 1] *= 2;
        score[i] *= 2;
      } else if (option[i][j] === '#') score[i] *= -1;
    }
  }

  return score.reduce((prev, next) => {
    return prev + next;
  }, 0);
}
console.log(solution('1S2D*3T'));
console.log(solution('1D2S#10S'));
