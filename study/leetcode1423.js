var maxScore = function (cardPoints, k) {
  let sumN = 0;
  let total = 0;
  const len = cardPoints.length;
  const kk = len - k;

  for (let i = 0; i < len; i++) {
    if (i < kk) sumN += cardPoints[i];
    total += cardPoints[i];
  }

  let left = 0;
  let compare = sumN;
  for (let right = kk; right < len; right++) {
    compare = compare - cardPoints[left] + cardPoints[right];
    sumN = Math.min(sumN, compare);
    left++;
  }
  return total - sumN;
};
console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3));
