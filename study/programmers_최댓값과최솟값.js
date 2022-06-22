function solution(s) {
  const arr = s.split(' ').map(Number);
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return `${min} ${max}`;
}
console.log(solution('-1 -2 -3 -4'));
