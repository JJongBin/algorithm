var findOrder = function (numCourses, prerequisites) {
  const len = prerequisites.length;
  const graph = new Array(numCourses);
  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }
  const indegrees = new Array(numCourses).fill(0);
  for (const [a, b] of prerequisites) {
    graph[b].push(a);
    indegrees[a]++;
  }
  console.log(indegrees);
  const queue = [];

  for (let i = 0; i < numCourses; i++) {
    if (indegrees[i] === 0) queue.push(i);
  }
  console.log(queue);
  const answer = [];
  while (queue.length) {
    const temp = queue.pop();
    answer.push(temp);
    for (let next of graph[temp]) {
      indegrees[next]--;
      if (indegrees[next] === 0) queue.push(next);
    }
  }
  if (answer.length !== numCourses) return [];
  return answer;
};

// console.log(
//   findOrder(4, [
//     [1, 0],
//     [2, 0],
//     [3, 1],
//     [3, 2],
//   ])
// );
console.log(
  findOrder(3, [
    [1, 0],
    [1, 2],
    [0, 1],
  ])
);
