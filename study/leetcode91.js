var numDecodings = function (s) {
  const len = s.length;
  const check = new Array(100).fill(0);

  const dfs = idx => {
    let cnt = 0;
    if (idx === len) return 1;
    else {
      if (s[idx] === '0') return 0;
      if (check[idx]) return check[idx];

      cnt += dfs(idx + 1);
      if (len - idx >= 2) {
        if (+(s[idx] + s[idx + 1]) <= 26) cnt += dfs(idx + 2);
      }
    }
    check[idx] = cnt;
    return cnt;
  };

  return dfs(0);
};
