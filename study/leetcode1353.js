class MinHeap {
  constructor() {
    this.heap = [];
    this.heap.push(0);
  }
  size = () => {
    return this.heap.length - 1;
  };

  insert = value => {
    this.heap.push(value);
    this.upheap(this.heap.length - 1);
  };

  upheap = pos => {
    let temp = this.heap[pos];

    while (temp < this.heap[parseInt(pos / 2)]) {
      this.heap[pos] = this.heap[parseInt(pos / 2)];
      pos = parseInt(pos / 2);
    }
    this.heap[pos] = temp;
  };

  get = () => {
    if (this.size() === 0) return false;
    if (this.size() === 1) return this.heap.pop();
    const result = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.downheap(1, this.heap.length - 1);
    return result;
  };

  downheap = (pos, len) => {
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
  };
}

const maxEvents = events => {
  events.sort((a, b) => a[0] - b[0]);
  const heap = new MinHeap();

  let cnt = 0;
  let i = 0;
  for (let day = 1; day < 10e5; day++) {
    // console.log(day)
    for (; i < events.length; i++) {
      if (events[i][0] !== day) break;
      heap.insert(events[i][1]);
    }
    if (heap.size() > 0) {
      if (heap.get() >= day) cnt++;
      else {
        cnt_temp = cnt;
        while (heap.size() > 0 && cnt_temp === cnt) {
          if (heap.get() >= day) cnt++;
        }
      }
    }
  }
  return cnt;
};
