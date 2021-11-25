const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./testcase/1005.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input.map((item) => item.split(" ").map((item2) => +item2));

const t = input[0];

const solve = (n, k, arr, graph, checkDp, indegrees, target) => {
  const queue = [];
  // indegrees가 0인 값 queue에 넣어주기
  for (let kk = 1; kk < indegrees.length; kk++) {
    if (indegrees[kk] === 0) {
      queue.push(kk);
    }
  }
  while (queue.length) {
    const temp = queue.shift();
    let tempDp = 0;
    // dp를 이용해서 값을 계산
    for (const dp of checkDp[temp]) {
      tempDp = Math.max(tempDp, arr[dp - 1]);
    }
    // 결과 저장
    arr[temp - 1] = tempDp + arr[temp - 1];
    for (const next of graph[temp]) {
      indegrees[next]--;
      if (indegrees[next] === 0) queue.push(next);
    }
  }
  return arr[target - 1];
};

// 테스트케이스 별로
for (let i = 1; i < input.length; i++) {
  const n = input[i][0];
  const k = input[i][1];
  const arr = input[i + 1];
  const graph = new Array(n + 1);
  const checkDp = new Array(n + 1);
  for (let j = 1; j < n + 1; j++) {
    graph[j] = [];
    checkDp[j] = [];
  }
  const indegrees = new Array(n + 1).fill(0);
  for (let j = i + 2; j < i + k + 2; j++) {
    graph[input[j][0]].push(input[j][1]);
    checkDp[input[j][1]].push(input[j][0]);
    indegrees[input[j][1]]++;
  }
  const target = input[i + k + 2][0];
  console.log(solve(n, k, arr, graph, checkDp, indegrees, target));
  i += k + 2;
}
