function solution(lines) {
  var answer = 0;
  lines = lines.map(item => item.split(' '));

  const milliseconds = [];
  for (const [day, endTime, time] of lines) {
    const endTimeArr = endTime.split(':').map(Number);
    const millisecond = (endTimeArr[0] * 3600 + endTimeArr[1] * 60 + endTimeArr[2]) * 1000;
    const millisecondTime = +time.slice(0, time.length - 1) * 1000;
    milliseconds.push([millisecond - millisecondTime + 1, millisecond]);
  }

  for (let i = 0; i < milliseconds.length; i++) {
    let cnt = 0;
    for (let j = i; j < milliseconds.length; j++) {
      if (milliseconds[i][1] > milliseconds[j][0] - 1000) cnt++;
    }
    answer = Math.max(answer, cnt);
  }

  return answer;
}
console.log(solution(['2016-09-15 01:00:04.001 2.0s', '2016-09-15 01:00:07.000 2s']));
console.log(
  solution([
    '2016-09-15 20:59:57.421 0.351s',
    '2016-09-15 20:59:58.233 1.181s',
    '2016-09-15 20:59:58.299 0.8s',
    '2016-09-15 20:59:58.688 1.041s',
    '2016-09-15 20:59:59.591 1.412s',
    '2016-09-15 21:00:00.464 1.466s',
    '2016-09-15 21:00:00.741 1.581s',
    '2016-09-15 21:00:00.748 2.31s',
    '2016-09-15 21:00:00.966 0.381s',
    '2016-09-15 21:00:02.066 2.62s',
  ])
);
