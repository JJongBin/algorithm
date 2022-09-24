function solution(users, emoticons) {
  var answer = [0, 0];

  const emoticonsLen = emoticons.length;
  const salePercent = [10, 20, 30, 40];

  const setSalePercent = idx => {
    const arr = [];
    if (idx === 1) return salePercent.map(v => [v]);

    for (let i = 0; i < 4; i++) {
      const temp = setSalePercent(idx - 1);
      const attached = temp.map(v => [salePercent[i], ...v]);
      arr.push(...attached);
    }

    return arr;
  };

  const saleArr = setSalePercent(emoticonsLen);

  for (const sales of saleArr) {
    let cnt = 0;
    let sell = 0;
    for (const user of users) {
      const [userPercent, userMaxCost] = user;
      let cost = 0;
      for (let i = 0; i < emoticonsLen; i++) {
        if (userPercent <= sales[i]) cost += (emoticons[i] * (100 - sales[i])) / 100;
      }
      if (cost >= userMaxCost) cnt++;
      else sell += cost;
    }

    if (answer[0] < cnt) answer = [cnt, sell];
    else if (answer[0] === cnt && answer[1] <= sell) answer = [cnt, sell];
  }

  return answer;
}

console.log(
  solution(
    [
      [40, 10000],
      [25, 10000],
    ],
    [7000, 9000]
  )
);
// console.log(
//   solution(
//     [
//       [40, 2900],
//       [23, 10000],
//       [11, 5200],
//       [5, 5900],
//       [40, 3100],
//       [27, 9200],
//       [32, 6900],
//     ],
//     [1300, 1500, 1600, 4900]
//   )
// );
