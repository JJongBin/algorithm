function solution(data, col, row_begin, row_end) {
  var answer = 0;

  data.sort((a, b) => {
    if (a[col - 1] === b[col - 1]) return b[0] - a[0];
    return a[col - 1] - b[col - 1];
  });

  for (let i = row_begin - 1; i < row_end; i++) {
    const mod = data[i].reduce((a, b) => a + (b % (i + 1)), 0);
    answer = answer ^ mod;
  }

  return answer;
}

console.log(
  solution(
    [
      [2, 2, 6],
      [1, 5, 10],
      [4, 2, 9],
      [3, 8, 3],
    ],
    2,
    2,
    3
  )
);
