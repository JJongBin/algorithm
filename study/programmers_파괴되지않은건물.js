function solution(board, skill) {
  var answer = 0;

  const calcArr = [...Array(board.length + 1)].map(_ => new Array(board[0].length + 1).fill(0));
  const doSkill = s => {
    const [type, x1, y1, x2, y2, degree] = s;
    if (type === 1) {
      calcArr[x1][y1] -= degree;
      calcArr[x2 + 1][y2 + 1] -= degree;
      calcArr[x1][y2 + 1] += degree;
      calcArr[x2 + 1][y1] += degree;
    } else {
      calcArr[x1][y1] += degree;
      calcArr[x2 + 1][y2 + 1] += degree;
      calcArr[x1][y2 + 1] -= degree;
      calcArr[x2 + 1][y1] -= degree;
    }
  };

  for (const s of skill) doSkill(s);

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length - 1; j++) calcArr[i][j + 1] += calcArr[i][j];
  }

  for (let i = 0; i < board.length - 1; i++) {
    for (let j = 0; j < board[0].length; j++) calcArr[i + 1][j] += calcArr[i][j];
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] + calcArr[i][j] > 0) answer++;
    }
  }

  return answer;
}
console.log(
  solution(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [
      [1, 1, 1, 2, 2, 4],
      [1, 0, 0, 1, 1, 2],
      [2, 2, 0, 2, 0, 100],
    ]
  )
);
// console.log(
//   solution(
//     [
//       [5, 5, 5, 5, 5],
//       [5, 5, 5, 5, 5],
//       [5, 5, 5, 5, 5],
//       [5, 5, 5, 5, 5],
//     ],
//     [
//       [1, 0, 0, 3, 4, 4],
//       [1, 2, 0, 2, 3, 2],
//       [2, 1, 0, 3, 1, 2],
//       [1, 0, 1, 3, 3, 1],
//     ]
//   )
// );
