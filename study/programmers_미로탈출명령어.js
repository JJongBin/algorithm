function solution(n, m, x, y, r, c, k) {
  var answer = '';

  const dx = [1, 0, 0, -1];
  const dy = [0, -1, 1, 0];
  const dist = ['d', 'l', 'r', 'u'];

  const dfs = (x, y, cmd) => {
    for (let i = 0; i < 4; i++) {
      const xx = x + dx[i];
      const yy = y + dy[i];

      if (xx < 1 || xx > n || yy < 1 || yy > m) continue;

      const newCmd = cmd + dist[i];
      if (newCmd.length >= k) {
        if (xx === r && yy === c) answer = newCmd;
        continue;
      }
      if (Math.abs(xx - r) + Math.abs(yy - c) > k - newCmd.length) continue;
      if ((Math.abs(xx - r) + Math.abs(yy - c)) % 2 !== (k - newCmd.length) % 2) continue;

      dfs(xx, yy, newCmd);
      if (answer) return;
    }
  };

  dfs(x, y, '');

  return answer ? answer : 'impossible';
}

console.log(solution(3, 4, 2, 3, 3, 1, 5));
