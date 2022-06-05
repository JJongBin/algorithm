function solution(priorities, location) {
  var answer = 0;
  priorities = priorities.map((item, i) => [item, i]);

  outer: while (true) {
    const document = priorities.shift();
    for (const p of priorities) {
      if (document[0] < p[0]) {
        priorities.push(document);
        continue outer;
      }
    }
    if (document[1] === location) return answer + 1;
    answer++;
  }
}
console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
