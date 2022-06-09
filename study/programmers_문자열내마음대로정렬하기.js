function solution(strings, n) {
  const answer = strings.sort((a, b) => {
    if (a[n] === b[n]) return (a > b) - (a < b);
    return (a[n] > b[n]) - (a[n] < b[n]);
  });
  return answer;
}
console.log(solution(['sun', 'bed', 'car'], 1));
