// function solution(n, works) {
//   var answer = 0;

//   let total = works.reduce((a, b) => a + b, 0) - n;
//   const len = works.length;

//   // if (total <= 0) return 0;

//   for (let i = 0; i < len; i++) {
//     let avg = Math.floor(total / (len - i));
//     if (avg <= 0) break;

//     if (avg < works[i]) {
//       total -= avg;
//       answer += avg ** 2;
//     } else {
//       total -= works[i];
//       answer += works[i] ** 2;
//     }
//   }

//   return answer;
// }
// 나머지 값이 큰수를 고르는데 영향을 줄 수 있음

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

function solution(n, works) {
  var answer = 0;
  const len = works.length;

  const heap = new MaxHeap();
  for (const work of works) heap.insert(work);

  while (n > 0) {
    let num = heap.get();
    if (!num) return 0;

    heap.insert(num - 1);
    n -= 1;
  }
  for (let i = 1; i < heap.size() + 1; i++) answer += heap.heap[i] ** 2;

  return answer;
}
console.log(solution(4, [4, 3, 3]));
console.log(solution(1, [2, 1, 2]));
console.log(solution(3, [1, 1]));
