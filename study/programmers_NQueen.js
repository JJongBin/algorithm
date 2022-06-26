function solution(n) {
  var answer = 0;
  const queens = [];

  const setQueen = l => {
    outer: for (let i = 0; i < n; i++) {
      for (const q of queens) {
        const [xx, yy] = q;
        if (yy === i) continue outer;
        if (Math.abs(xx - l) === Math.abs(yy - i)) continue outer;
      }
      queens.push([l, i]);
      if (l + 1 === n) answer++;
      else setQueen(l + 1);
      queens.pop();
    }
  };
  setQueen(0);

  return answer;
}
console.log(solution(4));
