var guessNumber = function (n) {
  let left = 1;
  let right = n;

  while (left <= right) {
    let mid = parseInt((left + right) / 2);

    let num = guess(mid);
    if (num === 0) {
      return mid;
    } else if (num === -1) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
};
