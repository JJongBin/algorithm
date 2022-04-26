function solution(board, moves) {
  var answer = 0;
  const stack = [];

  for (const selectNum of moves) {
    for (let i = 0; i < board.length; i++) {
      const toy = board[i][selectNum - 1];
      if (toy) {
        if (stack.length && stack[stack.length - 1] === toy) {
          stack.pop();
          answer += 2;
        } else stack.push(toy);
        board[i][selectNum - 1] = 0;
        break;
      }
    }
  }
  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
