function solution(s) {
  var answer = '';
  let idx = 1;
  for (const a of s) {
    if (a === ' ') {
      idx = 1;
      answer += ' ';
      continue;
    } else answer += idx % 2 ? a.toUpperCase() : a.toLowerCase();
    idx++;
  }
  return answer;
}
console.log(solution('try hello world'));
