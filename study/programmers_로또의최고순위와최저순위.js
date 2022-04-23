function solution(lottos, win_nums) {
  var answer = [];
  const new_win_nums = new Set();
  for (const num of win_nums) new_win_nums.add(num);

  let match_cnt = 0;
  let unknown_cnt = 0;
  for (const num of lottos) {
    if (new_win_nums.has(num)) match_cnt++;
    if (!num) unknown_cnt++;
  }

  answer.push(7 - match_cnt - unknown_cnt === 7 ? 6 : 7 - match_cnt - unknown_cnt);
  answer.push(7 - match_cnt === 7 ? 6 : 7 - match_cnt);

  return answer;
}
console.log(solution([0, 0, 0, 0, 0, 25], [31, 10, 45, 1, 6, 19]));
