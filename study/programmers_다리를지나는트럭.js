function solution(bridge_length, weight, truck_weights) {
  let cnt = 0;
  const queue = [];
  let time = 0;
  while (truck_weights.length || queue.length) {
    if (queue.length) {
      if (time - queue[0][1] >= bridge_length) {
        cnt -= queue.shift()[0];
        continue;
      }
    }

    if (truck_weights.length) {
      if (cnt + truck_weights[0] <= weight) {
        const nextTruck = truck_weights.shift();
        queue.push([nextTruck, time]);
        cnt += nextTruck;
      }
    }
    time++;
  }
  return time + 1;
}
console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(100, 100, [10]));
