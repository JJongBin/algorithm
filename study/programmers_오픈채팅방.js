function solution(record) {
  var answer = [];
  record = record.map(item => item.split(' '));

  const hash = new Map();
  for (const [category, id, nickname] of record) {
    if (category === 'Enter') hash.set(id, nickname);
    if (category === 'Change') hash.set(id, nickname);
  }

  for (const [category, id, nickname] of record) {
    if (category === 'Enter') answer.push(`${hash.get(id)}님이 들어왔습니다.`);
    if (category === 'Leave') answer.push(`${hash.get(id)}님이 나갔습니다.`);
  }

  return answer;
}
console.log(
  solution(['Enter uid1234 Muzi', 'Enter uid4567 Prodo', 'Leave uid1234', 'Enter uid1234 Prodo', 'Change uid4567 Ryan'])
);
