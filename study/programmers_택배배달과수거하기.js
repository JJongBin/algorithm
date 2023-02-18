function solution(cap, n, deliveries, pickups) {
  var answer = 0;

  let deliveryCnt = 0;
  let pickupCnt = 0;
  let dist = n;

  for (let i = n - 1; i >= 0; i--) {
    deliveryCnt += deliveries[i];
    pickupCnt += pickups[i];

    while (deliveryCnt > cap || pickupCnt > cap) {
      deliveryCnt -= cap;
      pickupCnt -= cap;

      answer += dist * 2;
      dist = i + 1;
    }
  }

  if (dist > 0 && (deliveryCnt || pickupCnt)) answer += dist * 2;

  return answer;
}

console.log(solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]));
