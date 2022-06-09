function solution(sizes) {
  var answer = 0;
  const sortSizes = sizes.map(item => item.sort((a, b) => a - b));

  let h = 0;
  let w = 0;
  for (const s of sortSizes) {
    if (h < s[0]) h = s[0];
    if (w < s[1]) w = s[1];
  }

  answer = h * w;
  return answer;
}
console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
