function solution(relation) {
  var answer = 0;
  const column = relation[0].length;
  const row = relation.length;
  const hash = new Set();

  const compare = keys => {
    const check = new Set();
    for (const r of relation) {
      let strData = '';
      for (const k of keys) strData += `${r[k]} `;
      check.add(strData);
    }
    if (check.size === row) {
      hash.add(keys.join(''));
      answer++;
    }
  };

  const idxs = [];
  const combi = (idx, keys) => {
    for (let i = idx; i < column; i++) {
      keys.push(i);
      idxs.push([...keys]);
      combi(i + 1, keys);
      keys.pop();
    }
  };

  combi(0, []);

  idxs.sort((a, b) => a.length - b.length);
  outer: for (const idx of idxs) {
    for (const k of [...hash.keys()]) {
      const rex = new RegExp(`[${k}]`, 'g');
      const joinIdx = idx.join('');
      const minimality = joinIdx.replace(rex, '');
      if (joinIdx.length === minimality.length + k.length) continue outer;
    }
    compare(idx);
  }
  return answer;
}
console.log(
  solution([
    ['100', 'ryan', 'music', '2'],
    ['200', 'apeach', 'math', '2'],
    ['300', 'tube', 'computer', '3'],
    ['400', 'con', 'computer', '4'],
    ['500', 'muzi', 'music', '3'],
    ['600', 'apeach', 'music', '2'],
  ])
);
console.log(
  solution([
    ['100', '2', '100', '100', '100', '100', '100', '100'],
    ['200', '2', '200', '200', '200', '200', '200', '200'],
    ['100', '22', '100', '300', '300', '300', '300', '300'],
    ['200', '22', '200', '400', '400', '400', '400', '400'],
    ['100', '222', '100', '500', '500', '500', '500', '500'],
    ['200', '222', '200', '600', '600', '600', '600', '600'],
  ])
);
console.log(solution([['100'], ['100'], ['300'], ['400'], ['500'], ['600']]));
