function solution(food_times, k) {
  var answer = 0;

  const food_timesOfIndex = food_times.map((time, i) => [i + 1, time]).sort((a, b) => a[1] - b[1]);

  const totalFoodCnt = food_times.length;
  let prevTime = 0;
  for (let i = 0; i < food_timesOfIndex.length; i++) {
    const [idx, time] = food_timesOfIndex[i];
    const needTime = (time - prevTime) * (totalFoodCnt - i);

    if (needTime <= k) {
      k -= needTime;
    } else {
      const leftFood = food_timesOfIndex.slice(i).sort((a, b) => a[0] - b[0]);
      answer = leftFood[k % leftFood.length][0];
      break;
    }
    prevTime = time;
  }

  return answer ? answer : -1;
}

console.log(solution([1, 1, 1, 1], 4));
console.log(solution([3, 1, 2], 5));
console.log(solution([3, 1, 1, 1, 2, 4, 3], 12));
