function solution(enter, leave) {
  const answer = new Array(enter.length).fill(0);

  const hash = new Map();

  while (leave.length) {
    while (hash.get(leave[0])) {
      for (let i = 0; i < hash.size; i++) {
        if ([...hash][i][0] === leave[0]) continue;
        answer[[...hash][i][0] - 1]++;
      }
      answer[leave[0] - 1] += hash.size - 1;

      hash.delete(leave[0]);
      leave.shift();
    }

    if (enter.length) hash.set(enter.shift(), 1);
  }

  // let idx = 0;
  // for (const l of leave) {
  //   while (!hash.get(l)) {
  //     hash.set(enter[idx], 1);
  //     idx++;
  //   }
  //   hash.delete(l);

  //   for (e of [...hash]) {
  //     answer[e[0] - 1]++;
  //   }
  //   answer[l - 1] += hash.size;
  // }

  return answer;
}

console.log(solution([1, 3, 2], [1, 2, 3]));
console.log(solution([1, 4, 2, 3], [2, 1, 3, 4]));
console.log(solution([3, 2, 1], [2, 1, 3]));
console.log(solution([3, 2, 1], [1, 3, 2]));
console.log(solution([1, 4, 2, 3], [2, 1, 4, 3]));
console.log(solution([1, 2], [1, 2]));
console.log(solution([1, 2, 3, 4], [4, 3, 2, 1]));
