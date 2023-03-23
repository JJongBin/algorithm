function solution(k, room_number) {
  var answer = [];

  const hash = new Map();
  const find = v => {
    if (!hash.has(v)) {
      hash.set(v, v + 1);
      return v;
    } else {
      const findV = find(hash.get(v));
      hash.set(v, findV);
      return findV;
    }
  };

  for (const number of room_number) {
    const room = find(number);
    answer.push(room);
  }

  return answer;
}

console.log(solution(10, [1, 3, 4, 1, 3, 1]));
