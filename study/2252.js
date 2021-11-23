const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./testcase/2252.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map((item) => item.split(" ").map((item2) => +item2));
const n = input[0][0];
const m = input[0][1];
// console.log(input);

const graph = new Array(n + 1);
const indegrees = new Array(n + 1).fill(0);
for (let i = 1; i < n + 1; i++) {
  graph[i] = [];
}
for (let i = 1; i < m + 1; i++) {
  graph[input[i][0]].push(input[i][1]);
  indegrees[input[i][1]]++;
}
// console.log(indegrees);
const queue = [];
for (let i = 1; i < n + 1; i++) {
  if (indegrees[i] === 0) queue.push(i);
}
// console.log(queue);
// console.log(graph);

const answer = [];
while (queue.length) {
  const temp = queue.shift();
  answer.push(temp);
  for (const next of graph[temp]) {
    indegrees[next]--;
    if (indegrees[next] === 0) queue.push(next);
  }
}
console.log(answer.join(" "));
