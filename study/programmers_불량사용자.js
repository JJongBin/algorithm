function solution(user_id, banned_id) {
  var answer = 0;
  const check = new Array(user_id).fill(0);
  const checkSet = new Set();
  const matchArr = [];

  const dfs = idx => {
    if (matchArr.length === banned_id.length) {
      const str = [...matchArr].sort().join('-');
      checkSet.add(str);
    } else {
      const str = banned_id[idx].replace(/\*/g, '.');
      const reg = new RegExp(str, '');
      for (let i = 0; i < user_id.length; i++) {
        if (check[i]) continue;
        const checkStr = user_id[i].replace(reg, '');
        if (!checkStr) {
          check[i] = 1;
          matchArr.push(user_id[i]);
          dfs(idx + 1);
          matchArr.pop();
          check[i] = 0;
        }
      }
    }
  };

  dfs(0);
  answer = checkSet.size;

  return answer;
}
console.log(solution(['frodo', 'fradi', 'crodo', 'abc123', 'frodoc'], ['fr*d*', 'abc1**']));
console.log(solution(['frodo', 'fradi', 'crodo', 'abc123', 'frodoc'], ['fr*d*', 'abc1**']));
console.log(solution(['frodo', 'fradi', 'crodo', 'abc123', 'frodoc'], ['fr*d*', '*rodo', '******', '******']));
console.log(
  solution(['frodo1', 'frodo2', 'frodo3', 'frodo4', 'frodo5', 'frodo6', 'frodo7', 'frodo8'], ['fr*d**', '******'])
);
