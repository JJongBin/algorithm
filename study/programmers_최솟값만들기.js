function solution(A, B) {
  var answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  let num = 0;
  for (let i = 0; i < A.length; i++) num += A[i] * B[i];

  return num;
}
console.log(solution([1, 4, 2], [5, 4, 4]));
