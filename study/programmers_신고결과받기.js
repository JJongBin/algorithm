function solution(id_list, report, k) {
  report = report.map(item => item.split(' '));

  const userNum = id_list.length;
  const answer = new Array(userNum).fill(0);
  const userIdx = {};
  for (let i = 0; i < userNum; i++) userIdx[id_list[i]] = i;

  // console.log(id_list);
  // console.log(report);
  // console.log(k);

  // console.log(userIdx);

  const hash = new Map();
  for (const [user, target] of report) hash.set(target, (hash.get(target) || new Set()).add(user));

  for (const [target, users] of hash.entries()) {
    if (users.size >= k) {
      for (const user of users) answer[userIdx[user]] += 1;
    }
  }

  return answer;
}
console.log(
  solution(
    ['muzi', 'frodo', 'apeach', 'neo'],
    ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
    2
  )
);
