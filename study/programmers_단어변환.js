function solution(begin, target, words) {
  var answer = Infinity;

  const validation = words.filter(word => word === target);
  if (!validation.length) return 0;

  const dfs = (now, words, cnt) => {
    if (target === now) {
      answer = Math.min(answer, cnt);
      return;
    }

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (!word) continue;

      const diffCnt = word.split('').reduce((n, w, i) => n + (w === now[i] ? 0 : 1), 0);
      if (diffCnt === 1) {
        const nextWords = [...words];
        nextWords[i] = '';
        dfs(word, nextWords, cnt + 1);
      }
    }
  };

  dfs(begin, words, 0);

  return answer;
}

console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']));
