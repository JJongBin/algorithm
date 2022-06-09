function solution(answers) {
  var answer = [];
  const student1 = [1, 2, 3, 4, 5];
  const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let idx1 = 0;
  let idx2 = 0;
  let idx3 = 0;

  const check = new Array(3).fill(0);
  for (const a of answers) {
    if (student1[idx1] === a) check[0]++;
    if (student2[idx2] === a) check[1]++;
    if (student3[idx3] === a) check[2]++;
    idx1 = idx1 + 1 > 4 ? 0 : idx1 + 1;
    idx2 = idx2 + 1 > 7 ? 0 : idx2 + 1;
    idx3 = idx3 + 1 > 9 ? 0 : idx3 + 1;
  }

  const max = Math.max(...check);
  for (let i = 0; i < check.length; i++) if (check[i] === max) answer.push(i + 1);

  return answer;
}
console.log(solution([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]));
// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5,
