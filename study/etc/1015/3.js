const solution = (paper, n) => {
  var answer = -Infinity;

  const getOrigamiNewPaper = (paper, pos) => {
    const len = paper.length;
    const newPaper = new Array(Math.max(pos, len - pos));

    for (let i = 0; i < newPaper.length; i++)
      newPaper[i] = (pos - i - 1 >= 0 ? paper[pos - i - 1] : 0) + (pos + i < len ? paper[pos + i] : 0);

    return newPaper;
  };

  const origami = (nowPaper, cnt) => {
    for (let i = 1; i < nowPaper.length; i++) {
      const newPaper = getOrigamiNewPaper(nowPaper, i);
      answer = Math.max(answer, ...newPaper);
      if (cnt + 1 <= n) origami([...newPaper], cnt + 1);
    }
  };

  answer = Math.max(answer, ...paper);
  origami([...paper], 1);

  return answer;
};
console.log(solution([7, 3, 5, -2, 9], 2));
