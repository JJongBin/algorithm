function solution(board) {
  const size = board.length;
  const hash = new Set();
  const queue = [];

  const check = (pos1, pos2, time) => {
    if (
      pos1[0] >= 0 &&
      pos1[0] < size &&
      pos1[1] >= 0 &&
      pos1[1] < size &&
      pos2[0] >= 0 &&
      pos2[0] < size &&
      pos2[1] >= 0 &&
      pos2[1] < size
    ) {
      if (!board[pos1[0]][pos1[1]] && !board[pos2[0]][pos2[1]]) {
        if ((pos1[0] === size - 1 && pos1[1] === size - 1) || (pos2[0] === size - 1 && pos2[1] === size - 1))
          return time;
        const temp = pos1.concat(pos2).join('-');
        if (!hash.has(temp)) {
          hash.add(temp);
          queue.push([pos1, pos2]);
        }
      }
    }
  };

  const bfs = (pos1, pos2) => {
    queue.push([pos1, pos2]);
    hash.add(pos1.concat(pos2).join('-'));
    let time = 1;

    while (queue.length) {
      const len = queue.length;
      for (let i = 0; i < len; i++) {
        const [pos1, pos2] = queue.shift();
        const [x1, y1] = pos1;
        const [x2, y2] = pos2;
        let checkPos = 0;

        // 이동
        checkPos = check([x1 - 1, y1], [x2 - 1, y2], time); // 상
        if (checkPos) return checkPos;

        checkPos = check([x1 + 1, y1], [x2 + 1, y2], time); // 하
        if (checkPos) return checkPos;

        checkPos = check([x1, y1 - 1], [x2, y2 - 1], time); // 좌
        if (checkPos) return checkPos;

        checkPos = check([x1, y1 + 1], [x2, y2 + 1], time); // 우
        if (checkPos) return checkPos;

        // 회전
        if (x1 === x2) {
          // 가로
          if (x1 - 1 >= 0 && x1 - 1 < size && x2 - 1 >= 0 && x2 - 1 < size) {
            if (!board[x1 - 1][y1] && !board[x2 - 1][y2]) {
              checkPos = check([x1 - 1, y1], [x1, y1], time);
              if (checkPos) return checkPos;
              checkPos = check([x2 - 1, y2], [x2, y2], time);
              if (checkPos) return checkPos;
            }
          }

          if (x1 + 1 >= 0 && x1 + 1 < size && x2 + 1 >= 0 && x2 + 1 < size) {
            if (!board[x1 + 1][y1] && !board[x2 + 1][y2]) {
              checkPos = check([x1, y1], [x1 + 1, y1], time);
              if (checkPos) return checkPos;
              checkPos = check([x2, y2], [x2 + 1, y2], time);
              if (checkPos) return checkPos;
            }
          }
        }

        if (y1 === y2) {
          // 세로
          if (y1 - 1 >= 0 && y1 - 1 < size && y2 - 1 >= 0 && y2 - 1 < size) {
            if (!board[x1][y1 - 1] && !board[x2][y2 - 1]) {
              checkPos = check([x1, y1 - 1], [x1, y1], time);
              if (checkPos) return checkPos;
              checkPos = check([x2, y2 - 1], [x2, y2], time);
              if (checkPos) return checkPos;
            }
          }

          if (y1 + 1 >= 0 && y1 + 1 < size && y2 + 1 >= 0 && y2 + 1 < size) {
            if (!board[x1][y1 + 1] && !board[x2][y2 + 1]) {
              checkPos = check([x1, y1], [x1, y1 + 1], time);
              if (checkPos) return checkPos;
              checkPos = check([x2, y2], [x2, y2 + 1], time);
              if (checkPos) return checkPos;
            }
          }
        }
      }
      time += 1;
    }
    return 0;
  };

  return bfs([0, 0], [0, 1]);
}
console.log(
  solution([
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 1, 1],
    [1, 1, 0, 0, 1],
    [0, 0, 0, 0, 0],
  ])
);
console.log(
  solution([
    [0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 1, 1],
    [0, 0, 1, 0, 0, 0, 0],
  ])
);
console.log(
  solution([
    [0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 0, 0],
  ])
);
console.log(
  solution([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 0],
  ])
);
