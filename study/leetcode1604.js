var alertNames = function (keyName, keyTime) {
  let answer = new Set();
  // let hash = new Map();
  let times = [];
  for (let i = 0; i < keyTime.length; i++)
    times.push([
      keyName[i],
      parseInt(keyTime[i].split(":")[0]) * 60 +
        parseInt(keyTime[i].split(":")[1]),
    ]);

  times.sort((a, b) => {
    if (a[0] !== b[0] && a[0] > b[0]) return 1;
    else if (a[0] !== b[0] && a[0] < b[0]) return -1;
    else return a[1] - b[1];
  });
  let start = [];
  let tmp = "";

  console.log(times);
  console.log(start);

  for (let i = 0; i < times.length; i++) {
    if (start.length === 3) answer.add(times[i - 1][0]);

    if (tmp !== times[i][0]) {
      tmp = times[i][0];
      start = [times[i][1]];
    } else if (start[0] + 60 >= times[i][1]) start.push(times[i][1]);
    else if (start[0] + 60 < times[i][1]) {
      while (start.length && start[0] + 60 < times[i][1]) start.shift();
      start.push(times[i][1]);
    }
  }
  if (start.length >= 3) answer.add(times[times.length - 1][0]);
  return [...answer].sort();
};
