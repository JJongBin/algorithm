function gcd(a, b) {
  while (b) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function solution(arrayA, arrayB) {
  var answer = 0;

  const gcdA = arrayA.reduce((a, b) => gcd(a, b));
  const gcdB = arrayB.reduce((a, b) => gcd(a, b));

  let checkA = true;
  for (const a of arrayA) {
    if (!(a % gcdB)) {
      checkA = false;
      break;
    }
  }
  if (checkA) answer = gcdB;

  let checkB = true;
  for (const b of arrayB) {
    if (!(b % gcdA)) {
      checkB = false;
      break;
    }
  }
  if (checkB) answer = Math.max(answer, gcdA);

  return answer;
}

console.log(solution([10, 17], [5, 20]));
