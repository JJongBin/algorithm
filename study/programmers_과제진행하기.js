function solution(plans) {
  var answer = [];
  const queue = [];

  plans = plans
    .map(plan => {
      const [assignment, start, time] = plan;
      const [h, m] = start.split(':').map(Number);
      return [assignment, h * 60 + m, +time];
    })
    .sort((a, b) => a[1] - b[1]);

  for (let i = 1; i < plans.length; i++) {
    const prevEndTime = plans[i - 1][1] + plans[i - 1][2];
    if (prevEndTime > plans[i][1]) queue.push([plans[i - 1][0], prevEndTime - plans[i][1]]);
    else {
      answer.push(plans[i - 1][0]);

      let remainingTime = plans[i][1] - prevEndTime;

      while (queue.length && queue[queue.length - 1][1] <= remainingTime) {
        const [assignment, needTime] = queue.pop();
        remainingTime -= needTime;
        answer.push(assignment);
      }

      if (remainingTime && queue.length) {
        queue[queue.length - 1][1] -= remainingTime;
      }
    }
  }

  answer.push(plans[plans.length - 1][0]);

  while (queue.length) {
    const [assignment, needTime] = queue.pop();
    answer.push(assignment);
  }

  return answer;
}

console.log(
  solution([
    ['korean', '11:40', '30'],
    ['english', '12:10', '20'],
    ['math', '12:30', '40'],
  ])
);

console.log(
  solution([
    ['science', '12:40', '50'],
    ['music', '12:20', '40'],
    ['history', '14:00', '30'],
    ['computer', '12:30', '100'],
  ])
);
