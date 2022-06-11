function solution(w, h) {
  let num = 0;
  for (let i = Math.min(w, h); i > 1; i--) {
    if (!(w % i) && !(h % i)) {
      num = i;
      break;
    }
  }
  return w * h - (w + h - num);
}
console.log(solution(8, 12));
