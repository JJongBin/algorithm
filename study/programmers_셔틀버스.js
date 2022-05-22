function solution(n, t, m, timetable) {
  var answer = '';
  let time = 9 * 60;
  let check = true;

  const changeStrToTime = str => {
    const [hours, minits] = str.split(':');
    return +hours * 60 + +minits;
  };

  const changeTimeToStr = time => {
    const hours = (Math.floor(time / 60) + '').padStart(2, '0');
    const minits = ((time % 60) + '').padStart(2, '0');

    return `${hours}:${minits}`;
  };

  timetable = timetable.map(time => changeStrToTime(time));
  timetable = timetable.sort((a, b) => b - a);

  let lastCrew = 0;
  for (let i = 0; i < n; i++) {
    let cnt = m;
    while (timetable[timetable.length - 1] <= time && cnt > 0) {
      lastCrew = timetable.pop();
      cnt--;
    }
    check = cnt ? true : false;
    time += t;
  }
  answer = check ? changeTimeToStr(time - t) : changeTimeToStr(lastCrew - 1);
  return answer;
}
console.log(solution(1, 1, 5, ['08:00', '08:01', '08:02', '08:03']));
console.log(solution(2, 1, 2, ['09:00', '09:00', '09:00', '09:00']));
console.log(solution(2, 10, 2, ['09:10', '09:09', '08:00']));
console.log(solution(1, 1, 1, ['23:59']));
console.log(solution(3, 1, 1, ['09:10', '08:19', '08:58']));
