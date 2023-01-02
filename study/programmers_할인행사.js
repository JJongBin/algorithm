function solution(want, number, discount) {
  var answer = 0;
  const len = want.length;
  let check = 0;
  const checkObj = {};
  const cnt = {};

  for (let i = 0; i < len; i++) {
    cnt[want[i]] = number[i];
    checkObj[want] = 0;
  }

  for (let i = 0; i < 10; i++) {
    if (cnt[discount[i]] !== undefined) {
      cnt[discount[i]] = cnt[discount[i]] - 1;

      if (cnt[discount[i]] <= 0 && !checkObj[discount[i]]) {
        check++;
        checkObj[discount[i]] = 1;
      }
    }
  }
  if (check === len) answer++;

  let left = 0;
  for (let right = 10; right < discount.length; right++) {
    if (cnt[discount[left]] !== undefined) {
      cnt[discount[left]] += 1;

      if (cnt[discount[left]] > 0 && checkObj[discount[left]]) {
        check--;
        checkObj[discount[left]] = 0;
      }
    }

    if (cnt[discount[right]] !== undefined) {
      cnt[discount[right]] -= 1;

      if (cnt[discount[right]] <= 0 && !checkObj[discount[right]]) {
        check++;
        checkObj[discount[right]] = 1;
      }
    }

    left++;
    if (check === len) answer++;
  }

  return answer;
}

console.log(
  solution(
    ['banana', 'apple', 'rice', 'pork', 'pot'],
    [3, 2, 2, 2, 1],
    ['chicken', 'apple', 'apple', 'banana', 'rice', 'apple', 'pork', 'banana', 'pork', 'rice', 'pot', 'banana', 'apple', 'banana']
  )
);

console.log(
  solution(['apple'], [10], ['banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana'])
);
