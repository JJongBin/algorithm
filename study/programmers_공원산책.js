function solution(park, routes) {
  var answer = [0, 0];

  const dist = {
    N: [-1, 0],
    S: [1, 0],
    W: [0, -1],
    E: [0, 1],
  };

  const n = park.length;
  const m = park[0].length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (park[i][j] === 'S') answer = [i, j];
    }
  }

  outer: for (const route of routes) {
    const [d, cnt] = route.split(' ');

    let nextPos = [...answer];
    for (let k = 0; k < +cnt; k++) {
      const nextX = nextPos[0] + dist[d][0];
      const nextY = nextPos[1] + dist[d][1];

      if (nextX < 0 || nextX >= n || nextY < 0 || nextY >= m) continue outer;
      if (park[nextX][nextY] === 'X') continue outer;
      nextPos = [nextX, nextY];
    }
    answer = nextPos;
  }

  return answer;
}

console.log(solution(['SOO', 'OXX', 'OOO'], ['E 2', 'S 2', 'W 1']));
