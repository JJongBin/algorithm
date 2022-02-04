const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './testcase/1655.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();
input = input.map(Number);

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
    if (this.size() === 0) return false;
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
    if (this.size() === 0) return false;
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

const minHeap = new MinHeap();
const maxHeap = new MaxHeap();
let mid = input[0];
const result = [mid];

for (let i = 1; i < n; i++) {
  if (mid > input[i]) maxHeap.insert(input[i]);
  else if (mid < input[i]) minHeap.insert(input[i]);
  else {
    if (maxHeap.size() >= minHeap.size()) maxHeap.insert(input[i]);
    else minHeap.insert(input[i]);
  }

  if (maxHeap.size() > minHeap.size()) {
    const temp = mid;
    mid = maxHeap.get();
    minHeap.insert(temp);
  } else if (maxHeap.size() + 1 < minHeap.size()) {
    const temp = mid;
    mid = minHeap.get();
    maxHeap.insert(temp);
  }
  result.push(mid);
}
console.log(result.join('\n'));
