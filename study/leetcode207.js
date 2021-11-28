var canFinish = function (numCourses, prerequisites) {
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

  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (indegrees[i] === 0) queue.push(i);
  }
  const arr = [];
  while (queue.length) {
    const temp = queue.shift();
    arr.push(temp);

    for (const next of graph[temp]) {
      indegrees[next]--;
      if (indegrees[next] === 0) queue.push(next);
    }
  }
  if (arr.length === numCourses) return true;
  else return false;
};
console.log(canFinish(2, [[1, 0]]));
