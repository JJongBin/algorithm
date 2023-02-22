function solution(s) {
  var answer = 0;

  const len = s.length;
  const check = [...Array(len)].map(_ => new Array(len).fill(0));

  for (let i = len; i >= 0; i--) {
    for (let j = i; j < len; j++) {
      if (i === j) check[i][j] = 1;
      else if (s[i] === s[j]) {
        if (i + 1 < len && j - 1 >= 0 && check[i + 1][j - 1]) {
          check[i][j] += check[i + 1][j - 1] + 2;
        } else if (j - i === 1) {
          check[i][j] = 2;
        }
      }

      answer = answer = Math.max(answer, check[i][j]);
    }
  }

  return answer;
}

console.log(solution('abcdcba'));
console.log(solution('abacde'));
console.log(solution('abcdeef'));
console.log(solution('abba'));
console.log(solution('aaaaaaa'));
console.log(solution('ecdabbcadc'));
