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

    while (temp < this.heap[parseInt(pos / 2)]) {
      this.heap[pos] = this.heap[parseInt(pos / 2)];
      pos = parseInt(pos / 2);
    }
    this.heap[pos] = temp;
  }

  get() {
    if (this.size() === 0) return;
    if (this.size() === 1) return this.heap.pop();
    const result = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.downheap(1, this.heap.length - 1);
    return result;
  }

  show() {
    if (this.size() === 0) return;
    return this.heap[1];
  }

  downheap(pos, len) {
    let temp = this.heap[pos],
      child;
    while (pos <= parseInt(len / 2)) {
      child = pos * 2;
      if (child < len && this.heap[child] > this.heap[child + 1]) child++;
      if (temp <= this.heap[child]) break;
      this.heap[pos] = this.heap[child];
      pos = child;
    }
    this.heap[pos] = temp;
  }

  size() {
    return this.heap.length - 1;
  }
}

class MaxHeap {
  constructor() {
    this.heap = [];
    this.heap.push(1e9);
  }

  insert(value) {
    this.heap.push(value);
    this.upheap(this.heap.length - 1);
  }

  upheap(pos) {
    let temp = this.heap[pos];

    while (temp > this.heap[parseInt(pos / 2)]) {
      this.heap[pos] = this.heap[parseInt(pos / 2)];
      pos = parseInt(pos / 2);
    }
    this.heap[pos] = temp;
  }

  get() {
    if (this.size() === 0) return;
    if (this.size() === 1) return this.heap.pop();
    const result = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.downheap(1, this.heap.length - 1);
    return result;
  }

  show() {
    if (this.size() === 0) return;
    return this.heap[1];
  }

  downheap(pos, len) {
    let temp = this.heap[pos],
      child;
    while (pos <= parseInt(len / 2)) {
      child = pos * 2;
      if (child < len && this.heap[child] < this.heap[child + 1]) child++;
      if (temp >= this.heap[child]) break;
      this.heap[pos] = this.heap[child];
      pos = child;
    }
    this.heap[pos] = temp;
  }

  size() {
    return this.heap.length - 1;
  }
}

function solution(A, B) {
  var answer = 0;

  const maxHeap = new MaxHeap();
  const minHeap = new MinHeap();

  A.sort((a, b) => b - a);

  for (const b of B) {
    maxHeap.insert(b);
    minHeap.insert(b);
  }

  for (const a of A) {
    if (a < minHeap.show()) {
      minHeap.get();
      answer += 1;
    } else if (a >= maxHeap.show()) {
      minHeap.get();
    } else {
      maxHeap.get();
      answer += 1;
    }
  }

  return answer;
}

console.log(solution([5, 1, 3, 7], [2, 2, 6, 8]));
