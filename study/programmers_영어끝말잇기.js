function solution(n, words) {
  var answer = [1, 1];

  const len = words.length;
  const check = new Set();
  let i = 0;
  let last = words[0][0];

  for (i; i < len; i++) {
    if (check.has(words[i]) || last !== words[i][0]) break;
    answer[0] = answer[0] + 1 > n ? 1 : answer[0] + 1;
    answer[1] = answer[0] === 1 ? answer[1] + 1 : answer[1];
    check.add(words[i]);
    last = words[i][words[i].length - 1];
  }

  return i === len ? [0, 0] : answer;
}
console.log(solution(3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'tank', 'mother', 'robot', 'tank']));
