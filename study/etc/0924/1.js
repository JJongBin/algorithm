function solution(today, terms, privacies) {
  var answer = [];

  const [nowYear, nowMonth, nowDate] = today.split('.').map(Number);

  const availableTime = {};
  for (const term of terms) {
    const [owner, month] = term.split(' ');
    availableTime[owner] = month * 28;
  }

  for (let i = 0; i < privacies.length; i++) {
    const privacy = privacies[i];
    const [createDate, owner] = privacy.split(' ');
    const [year, month, date] = createDate.split('.').map(Number);

    const lastTime = (nowYear - year) * 12 * 28 + (nowMonth - month) * 28 + (nowDate - date);

    if (availableTime[owner] <= lastTime) answer.push(i + 1);
  }
  return answer;
}

console.log(solution('2022.05.19', ['A 6', 'B 12', 'C 3'], ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C']));
