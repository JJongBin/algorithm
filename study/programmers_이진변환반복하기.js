function solution(s) {
  var answer = [0, 0];

  const change = str => {
    let cnt = 0;
    for (const st of str) if (+st) cnt++;
    answer[0]++;
    answer[1] += str.length - cnt;
    return cnt.toString(2) + '';
  };

  while (s !== '1') s = change(s);

  return answer;
}
console.log(solution('110010101001'));
