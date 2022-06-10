function solution(s, n) {
  return s
    .split('')
    .map(item => {
      let num = item.charCodeAt();
      if (97 <= num && 122 >= num) num = num + n > 122 ? 96 + n - (122 - num) : num + n;
      else if (65 <= num && 90 >= num) num = num + n > 90 ? 64 + n - (90 - num) : num + n;
      else return item;
      return String.fromCharCode(num);
    })
    .join('');
}
console.log(solution('P', 15));
