function solution(cap, n, deliveries, pickups) {
  var answer = -1;
  const len = pickups.length;
  const check = new Array(len);

  let dist1 = 0;
  let dist2 = 0;
  let cnt = 0;
  let start = pickups.length - 1;

  for (let i = pickups.length - 1; i >= 0; i--) {
    console.log(cnt);
    if (cnt + pickups[i] >= cap) {
      pickups[i] -= cap - cnt;
      dist1 += (start + 1) * 2;
      cnt = 0;

      if (pickups[i]) start = i;
      else start = i - 1;
    } else {
      cnt += pickups[i];
      pickups[i] = 0;
    }
  }
  console.log('dist1', dist1);
  console.log(pickups);

  return answer;
}

console.log(solution(4, 5, [0, 3, 0, 4, 0], [1, 0, 3, 1, 2]));
