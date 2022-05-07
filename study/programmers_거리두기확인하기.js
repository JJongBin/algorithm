function solution(places) {
  var answer = [];

  const dx = [0, 1, 0, -1];
  const dy = [-1, 0, 1, 0];

  const bfs = (place, pos, check) => {
    const queue = [pos];
    check[pos[0]][pos[1]] = 1;
    let dist = 1;

    while (queue.length) {
      if (dist >= 3) return true;
      const len = queue.length;
      for (let i = 0; i < len; i++) {
        const [x, y] = queue.shift();
        for (let k = 0; k < 4; k++) {
          const xx = x + dx[k];
          const yy = y + dy[k];
          if (xx >= 0 && xx < 5 && yy >= 0 && yy < 5) {
            if (check[xx][yy]) continue;
            if (place[xx][yy] === 'X') continue;
            if (place[xx][yy] === 'P') return false;
            check[xx][yy] = 1;
            queue.push([xx, yy]);
          }
        }
      }
      dist++;
    }
    return true;
  };
  outer: for (const p of places) {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (p[i][j] === 'P') {
          const check = [...Array(5)].map(_ => new Array(5).fill(0));
          const res = bfs(p, [i, j], check);
          if (!res) {
            answer.push(0);
            continue outer;
          }
        }
      }
    }
    answer.push(1);
  }

  return answer;
}
console.log(
  solution([
    ['POOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP'],
    ['POOPX', 'OXPXP', 'PXXXO', 'OXXXO', 'OOOPP'],
    ['PXOPX', 'OXOXP', 'OXPOX', 'OXXOP', 'PXPOX'],
    ['OOOXX', 'XOOOX', 'OOOXX', 'OXOOX', 'OOOOO'],
    ['PXPXP', 'XPXPX', 'PXPXP', 'XPXPX', 'PXPXP'],
  ])
);
