function solution(play_time, adv_time, logs) {
  var answer = '';

  const formatingStr = str => {
    const [h, m, s] = str.split(':').map(Number);
    return h * 60 * 60 + m * 60 + s;
  };

  const toStr = num => {
    num = num > 0 ? num : 0;
    return (num + '').padStart(2, '0');
  };

  const formatingNum = num => {
    const h = Math.floor(num / 3600) + '';
    const m = (Math.floor(num / 60) % 60) + '';
    const s = (num % 60) + '';

    return `${toStr(h)}:${toStr(m)}:${toStr(s)}`;
  };

  logs = logs.map(item => item.split('-').map(item2 => formatingStr(item2)));
  const play = formatingStr(play_time);
  const adv = formatingStr(adv_time);
  const time = new Array(play + 1).fill(0);

  for (const [s, e] of logs) {
    time[s]++;
    time[e]--;
  }
  for (let i = 1; i < play + 1; i++) time[i] += time[i - 1];

  let left = -adv;
  let maxCnt = 0;
  let cnt = 0;
  for (let right = 0; right < play + 1; right++) {
    if (left >= 0) cnt -= time[left];
    left++;
    cnt += time[right];

    if (maxCnt < cnt) {
      maxCnt = cnt;
      answer = left;
    }
  }

  return formatingNum(answer);
}
console.log(
  solution('02:03:55', '00:14:15', [
    '01:20:15-01:45:14',
    '00:40:31-01:00:00',
    '00:25:50-00:48:29',
    '01:30:59-01:53:29',
    '01:37:44-02:02:30',
  ])
);
console.log(
  solution('99:59:59', '25:00:00', ['69:59:59-89:59:59', '01:00:00-21:00:00', '79:59:59-99:59:59', '11:00:00-31:00:00'])
);
console.log(solution('1:00:00', '00:10:00', ['00:50:00-01:00:00']));
