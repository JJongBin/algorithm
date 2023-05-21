const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1753.txt';

let inputs = fs.readFileSync(filePath).toString().trim().split('\n');
inputs = inputs.map(str => str.split(' ').map(Number));

class MinHeap {
  constructor() {
    this.heap = [];
    this.heap.push(-1e9);
  }

  insert(value) {
    this.heap.push(value);
    this.upheap(this.heap.length - 1);
  }

  upheap(pos) {
    let temp = this.heap[pos];

    while (temp[1] < this.heap[parseInt(pos / 2)][1]) {
      this.heap[pos] = this.heap[parseInt(pos / 2)];
      pos = parseInt(pos / 2);
    }
    this.heap[pos] = temp;
  }

  get() {
    if (this.size() === 0) return 0;
    if (this.size() === 1) return this.heap.pop();
    const result = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.downheap(1, this.heap.length - 1);
    return result;
  }

  downheap(pos, len) {
    let temp = this.heap[pos],
      child;
    while (pos <= parseInt(len / 2)) {
      child = pos * 2;
      if (child < len && this.heap[child][1] > this.heap[child + 1][1]) child++;
      if (temp[1] <= this.heap[child][1]) break;
      this.heap[pos] = this.heap[child];
      pos = child;
    }
    this.heap[pos] = temp;
  }

  size() {
    return this.heap.length - 1;
  }
}

const [V, E] = inputs[0];
const start = inputs[1][0];

const costs = new Array(V + 1).fill(Infinity);
const visited = new Array(V + 1).fill(0);

const dists = [...Array(V + 1)].map(_ => new Array());
for (let i = 2; i < inputs.length; i++) {
  const [u, v, w] = inputs[i];
  dists[u].push([v, w]);
}
costs[start] = 0;
const heap = new MinHeap();

heap.insert([start, 0]);

while (heap.size() > 0) {
  const [pos, dist] = heap.get();
  if (visited[pos]) continue;

  visited[pos] = true;
  for (let [next, dist] of dists[pos]) {
    if (costs[next] <= costs[pos] + dist) continue;
    costs[next] = dist + costs[pos];
    heap.insert([next, costs[next]]);
  }
}

const answer = [];
for (let i = 1; i <= V; i++) answer.push(costs[i] === Infinity ? 'INF' : costs[i]);
console.log(answer.join('\n'));
