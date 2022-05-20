function solution(s, n) {
  var answer = 0;

  const hash = new Set();
  let useShift = false;

  for (const str of s) {
    if (str.toUpperCase() === str) useShift = true;
    if (str !== ' ') hash.add(str);
  }

  if (useShift) n - 1;

  if (hash.size <= n) answer = s.length;
  else answer = -1;

  return answer;
}
console.log(solution('time to time', 5));
console.log(solution('Big Life is Good', 10));
