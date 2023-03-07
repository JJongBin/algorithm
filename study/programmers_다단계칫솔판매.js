function solution(enroll, referral, seller, amount) {
  var answer = [];

  const profit = {};
  const graph = {};
  for (let i = 0; i < enroll.length; i++) {
    profit[enroll[i]] = 0;
    graph[enroll[i]] = referral[i];
  }

  for (let i = 0; i < seller.length; i++) {
    let p = 100 * amount[i];
    let name = seller[i];
    while (graph[name]) {
      if (!p) break;
      const sendProfit = Math.floor(p / 10);
      profit[name] += p - sendProfit;
      p = sendProfit;
      name = graph[name];
    }
  }

  for (const name of enroll) answer.push(profit[name]);

  return answer;
}

console.log(
  solution(
    ['john', 'mary', 'edward', 'sam', 'emily', 'jaimie', 'tod', 'young'],
    ['-', '-', 'mary', 'edward', 'mary', 'mary', 'jaimie', 'edward'],
    ['young', 'john', 'tod', 'emily', 'mary'],
    [12, 4, 2, 5, 10]
  )
);
