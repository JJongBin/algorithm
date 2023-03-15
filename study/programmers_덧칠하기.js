function solution(n, m, section) {
  var answer = 0;

  let end = 0;
  for (const s of section) {
    if (end < s) {
      end = s + m - 1;
      answer += 1;
    }
  }

  return answer;
}

console.log(solution(8, 4, [2, 3, 6]));
