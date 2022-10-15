const solution = source => {
  var answer = '';
  const sourceMap = new Map();
  for (const s of source) sourceMap.set(s, (sourceMap.get(s) || 0) + 1);

  while (sourceMap.size) {
    const tempString = [...sourceMap.keys()]
      .map(s => {
        if (sourceMap.get(s) === 1) sourceMap.delete(s);
        else sourceMap.set(s, sourceMap.get(s) - 1);
        return s;
      })
      .sort()
      .join('');

    answer += tempString;
  }

  return answer;
};
console.log(solution('execute'));
