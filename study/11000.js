const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/11000.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map(str => str.split(' ').map(Number));

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
    if (this.size() === 0) return 0;
    if (this.size() === 1) return this.heap.pop();
    const result = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.downheap(1, this.heap.length - 1);
    return result;
  }

  downheap(pos, len) {
    let temp = this.heap[pos];
    let child;
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

const n = input.shift()[0];
input.sort((a, b) => a[0] - b[0]);

const heap = new MinHeap();
for (const [start, end] of input) {
  const time = heap.get();
  if (time <= start) heap.insert(end);
  else {
    heap.insert(time);
    heap.insert(end);
  }
}

console.log(heap.size());
