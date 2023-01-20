function solution(queue1, queue2) {
  var answer = 0;

  const len = queue1.length;

  const sumQueue1 = queue1.reduce((a, b) => BigInt(a) + BigInt(b), 0);
  const sumQueue2 = queue2.reduce((a, b) => BigInt(a) + BigInt(b), 0);
  const total = sumQueue1 + sumQueue2;
  if (total % BigInt(2)) return -1;
  const half = total / BigInt(2);

  let idx1 = 0;
  let idx2 = 0;
  let sum = sumQueue1;
  while (true) {
    if (sum > half) {
      sum -= BigInt(queue1[idx1]);
      queue2.push(queue1[idx1]);
      idx1++;
      answer++;
    } else if (sum < half) {
      sum += BigInt(queue2[idx2]);
      queue1.push(queue2[idx2]);
      idx2++;
      answer++;
    } else {
      break;
    }
    if (answer > len * 3) return -1;
  }
  return answer;
}
