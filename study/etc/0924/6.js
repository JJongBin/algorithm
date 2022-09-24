function solution(n, m, x, y, r, c, k) {
  var answer = '';

  const dx = [1, 0, 0, -1];
  const dy = [0, -1, 1, 0];
  const alpha = ['d', 'l', 'r', 'u'];

  let pos = [x, y, ''];
  for (let canMoveCnt = k; canMoveCnt >= 1; canMoveCnt--) {
    const [x, y, word] = pos;
    for (let i = 0; i < 4; i++) {
      const xx = x + dx[i];
      const yy = y + dy[i];
      const newWord = word + alpha[i];
      if (Math.abs(xx - r) + Math.abs(yy - c) > canMoveCnt) continue;
      if (xx < 1 || xx > n || yy < 1 || yy > m) continue;

      pos = [xx, yy, newWord];
      break;
    }
  }
  answer = pos[2];
  if (pos[0] !== r || pos[1] !== c) return 'impossible';
  return answer;
}

// console.log(solution(3, 4, 2, 3, 3, 1, 5));
console.log(solution(3, 3, 1, 2, 3, 3, 4));
