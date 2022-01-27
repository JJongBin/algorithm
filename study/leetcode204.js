var countPrimes = function (n) {
  let erasto = new Array(n).fill(true);
  for (let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
    if (erasto[i] === false) {
      continue;
    } else {
      for (let j = 2; j < n; j++) {
        if (i * j > n) {
          break;
        } else {
          erasto[i * j] = false;
        }
      }
    }
  }
  result = 0;
  for (let i = 2; i < n; i++) {
    if (erasto[i] === true) {
      result++;
    }
  }
  return result;
};
console.log(countPrimes(10));
