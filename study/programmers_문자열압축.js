function solution(s) {
  var answer = Infinity;
  const len = s.length;

  for (let i = 1; i < len / 2 + 1; i++) {
    const stack = [];
    let cnt = 1;
    for (let j = 0; j < len; j += i) {
      const now = s.slice(j, j + i);
      if (stack.length && stack[stack.length - 1] === now) {
        cnt++;
        if (j + i >= len) {
          const temp = stack.pop();
          stack.push(cnt);
          stack.push(temp);
        }
      } else {
        if (cnt > 1) {
          const temp = stack.pop();
          stack.push(cnt);
          stack.push(temp);
          cnt = 1;
        }
        stack.push(now);
      }
    }
    answer = Math.min(answer, stack.join('').length);
  }
  return answer;
}
console.log(solution('aabbaccc'));
console.log(solution('ababcdcdababcdcd'));
console.log(solution('abcabcdede'));
console.log(solution('abcabcabcabcdededededede'));
console.log(solution('xababcdcdababcdcd'));
