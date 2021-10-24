// beakjoon file input
const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './tastcase/2109.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input[0]);
let lacture = input.slice(1).map(item => item.split(" ").map(item2 => +item2));
lacture.sort((a, b) => b[1] - a[1]);
// console.log(lacture);


// Max Heap
class Maxheap {
    constructor() {
        this.heap = [];
        this.heap.push([10e5, 10e5]);
    }
    insert(value){
        this.heap.push(value);
        this.upheap(this.heap.length-1);
    }
    upheap(pos){
        const temp = this.heap[pos];
        while(temp[0] > this.heap[parseInt(pos/2)][0]){
            this.heap[pos] = this.heap[parseInt(pos/2)];
            pos = parseInt(pos/2);
        }
        this.heap[pos] = temp;
    }
    get(){
        if (this.heap.length-1 === 0) return false;
        if (this.heap.length === 2) return this.heap.pop();
        const result = this.heap[1];
        this.heap[1] = this.heap.pop();
        this.downheap(1, this.heap.length-1);
        return result;
    }
    downheap(pos, len){
        let temp = this.heap[pos], child;
        while(pos <= parseInt(len/2)){
            child = pos * 2;      
            if(child < len && this.heap[child][0] < this.heap[child+1][0]) child++;      // +1로 오른쪽자식과 비교한다 
            if(temp[0] >= this.heap[child][0]) break;
            this.heap[pos] = this.heap[child];
            pos = child;
        }
        this.heap[pos] = temp;
    }
}

const solve = (lacture) => {
    // Use Maxheap
    const heap = new Maxheap();
    let i = 0;
    let result = 0;
    for (let day = lacture[0][1]; day >= 1; day--){
        for(; i < lacture.length; i++){
            if(lacture[i][1] < day) break;
            heap.insert(lacture[i]);
        }
        if(heap.heap.length-1 > 0){
            let temp = heap.get();
            result += temp[0];
        }
    }
    return result;
}
if(n === 0)console.log(0);
else console.log(solve(lacture));