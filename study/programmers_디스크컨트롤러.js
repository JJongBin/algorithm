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

function solution(jobs) {
  var answer = 0;

  const n = jobs.length;
  const heap = new MinHeap();
  jobs.sort((a, b) => b[0] - a[0]);

  let totalTime = 0;
  let s = 0;
  while (jobs.length || heap.size()) {
    while (jobs.length && jobs[jobs.length - 1][0] <= s) {
      const job = jobs.pop();
      heap.insert(job);
    }

    if (heap.size()) {
      const [start, time] = heap.get();
      totalTime += s + time - start;
      s += time;
    } else {
      s += 1;
    }
  }

  answer = Math.floor(totalTime / n);

  return answer;
}

console.log(
  solution([
    [0, 3],
    [1, 9],
    [2, 6],
    // [0, 1],
    // [1, 1],
    // [2, 1],
    // [3, 1],
  ])
);
