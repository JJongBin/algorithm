function solution(survey, choices) {
  var answer = '';
  const score = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  const types = ['RT', 'CF', 'JM', 'AN'];

  for (let i = 0; i < survey.length; i++) {
    const [s1, s2] = survey[i].split('');
    if (choices[i] === 4) continue;
    else if (choices[i] > 4) score[s2] += choices[i] - 4;
    else score[s1] += 4 - choices[i];
  }

  for (const type of types) {
    const [t1, t2] = type;
    answer += score[t1] >= score[t2] ? t1 : t2;
  }

  return answer;
}

console.log(solution(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5]));
