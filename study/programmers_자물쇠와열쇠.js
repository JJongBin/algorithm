function solution(key, lock) {
  const m = key.length;
  const n = lock.length;

  // key 회전
  const rotate = key => {
    const len = key.length;
    const rotateKey = [...Array(len)].map(_ => new Array());
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) rotateKey[i].push(key[j][i]);
      rotateKey[i].reverse();
    }
    return rotateKey;
  };

  // key 확인
  const checkKey = (x, y, checkKey) => {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (i - x < 0 || i - x >= m || j - y < 0 || j - y >= m) {
          // key가 없는 부분
          if (!lock[i][j]) return false;
        } else {
          // key가 있는 부분
          if (lock[i][j] && checkKey[i - x][j - y]) return false;
          if (!lock[i][j] && !checkKey[i - x][j - y]) return false;
        }
      }
    }
    return true;
  };

  // 모든 부분 확인
  for (let k = 0; k < 4; k++) {
    key = rotate(key);
    for (let i = -m; i < n; i++) {
      for (let j = -m; j < n; j++) {
        const check = checkKey(i, j, key);
        if (check) return true;
      }
    }
  }
  return false;
}
console.log(
  solution(
    [
      [0, 0, 0],
      [1, 0, 0],
      [0, 1, 1],
    ],
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ]
  )
);
console.log(
  solution(
    [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ],
    [
      [0, 1, 1],
      [0, 1, 1],
      [0, 1, 1],
    ]
  )
);
