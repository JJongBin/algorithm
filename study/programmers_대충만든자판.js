function solution(keymap, targets) {
  var answer = [];

  const hash = new Map();
  for (const key of keymap) {
    for (let i = 0; i < key.length; i++) {
      if (!hash.get(key[i])) hash.set(key[i], i + 1);
      else hash.set(key[i], Math.min(hash.get(key[i]), i + 1));
    }
  }

  for (const target of targets) {
    let cnt = 0;
    for (const t of target) {
      const needClick = hash.get(t);

      if (!needClick) {
        cnt = -1;
        break;
      }
      cnt += needClick;
    }
    answer.push(cnt);
  }

  return answer;
}

console.log(solution(['ABACD', 'BCEFD'], ['ABCD', 'AABB']));
