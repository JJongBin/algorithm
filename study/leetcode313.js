var nthSuperUglyNumber = function (n, primes) {
  let t = new Array(primes.length).fill(0);
  let res = [1];
  while (res.length < n) {
    let pow_num = 2 ** 32;
    for (let i = 0; i < primes.length; i++) {
      if (res[t[i]] * primes[i] < pow_num) {
        pow_num = res[t[i]] * primes[i];
      }
    }
    for (let i = 0; i < primes.length; i++) {
      if (res[t[i]] * primes[i] === pow_num) t[i] += 1;
    }
    res.push(pow_num);
  }
  return res[res.length - 1];
};
console.log(nthSuperUglyNumber(12, [2, 7, 13, 19]));
