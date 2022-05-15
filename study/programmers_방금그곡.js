function solution(m, musicinfos) {
  var answer = '';
  const match = [];

  for (const music of musicinfos) {
    const [start, end, title, info] = music.split(',');
    const startTime = start.split(':');
    const endTime = end.split(':');
    let len = +endTime[0] * 60 + +endTime[1] - (+startTime[0] * 60 + +startTime[1]) + 1;

    let total = '';
    while (len) {
      for (let i = 0; i < info.length; i++) {
        if (info[i] !== '#') len--;
        total += info[i];
        if (!len) {
          if (i + 1 < info.length && info[i + 1] === '#') total += info[i + 1];
          break;
        }
      }
    }
    const rex = new RegExp(`${m}(?!#)`, 'gi');
    const temp = total.match(rex);

    if (temp) match.push([total.length, title]);
  }

  match.sort((a, b) => b[0] - a[0]);
  return match.length ? match[0][1] : '(None)';
}

console.log(solution('ABCDEFG', ['12:00,12:14,HELLO,CDEFGAB', '13:00,13:05,WORLD,ABCDEF']));
console.log(solution('ABC', ['12:00,12:14,HELLO,C#DEFGAB', '13:00,13:05,WORLD,ABCDEF']));
console.log(
  solution('CC#BCC#BCC#BCC#B', [
    '03:00,03:30,FOO,CC#B',
    '03:00,03:40,QOO,CC#B',
    '03:00,03:40,DOO,CC#B',
    '04:00,04:08,BAR,CC#BCC#BCC#B',
  ])
);
