function solution(price, money, count) {
  let needMoney = 0;
  for (let i = 1; i < count + 1; i++) needMoney += price * i;

  return needMoney - money <= 0 ? 0 : needMoney - money;
}
console.log(solution(3, 20, 4));
