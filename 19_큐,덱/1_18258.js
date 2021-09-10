// const fs = require("fs")
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './1_18258.txt';

// let input = fs.readFileSync(filePath).toString().trim().split("\n");

// const n = input[0];
// input.shift();


// let queue = [];


// const empty = () => {
//     if (queue.length >= 1) {
//         console.log(0);
//     } else {
//         console.log(1);
//     }
// }

// const push = (data) => {
//     queue.push(data);
// }

// const pop = () => {
//     if (queue.length === 0) {
//         console.log(-1);
//     } else {
//         console.log(queue[0]);
//         queue.shift();
//     }
// }

// const size = () => {
//     console.log(queue.length);
// }

// const front = () => {
//     if (queue.length === 0) {
//         console.log(-1);
//     } else {
//         console.log(queue[0]);
//     }
// }

// const back = () => {
//     if (queue.length === 0) {
//         console.log(-1);
//     } else {
//         console.log(queue[queue.length-1]);
//     }
// }


// let cmd = 0;
// for (const temp of input) {
//     cmd = temp.split(" ");
//     if (cmd[0] ===  "push") { push(parseInt(cmd[1])); }
//     if (cmd[0] ===  "pop") { pop(); }
//     if (cmd[0] ===  "size") { size(); }
//     if (cmd[0] ===  "empty") { empty(); }
//     if (cmd[0] ===  "front") { front(); }
//     if (cmd[0] ===  "back") { back(); }
// }


const fs = require("fs")
const filePath = process.platform === 'linux' ? '/dev/stdin' : './1_18258.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = input[0];


class Queue {
    constructor() {
        this.storage = {};
        this.head = 0;
        this.tail = 0;
        this.sizes = 0;
        this.node = 0;
    }

    push(data) {
        if(this.sizes === 0) {
            this.storage[this.node] = data;
            this.head = this.node;
            this.tail = this.node;
        } else {
            this.storage[this.node] = data;
            this.tail = this.node;
        }
        this.sizes++;
        this.node++;
    }

    pop() {
        if(this.sizes === 0) {
            // console.log(-1);
            return -1;
        } else {
            const temp = (this.storage[this.head]);
            delete this.storage[this.head];
            this.head++;
            this.sizes--;
            return temp;
        }
    }

    size() {
        // console.log(this.sizes);
        return this.sizes;
    }

    empty() {
        if (this.sizes === 0) {
            // console.log(1);
            return 1;
        } else {
            // console.log(0);
            return 0;
        }
    }

    front() {
        if (this.sizes === 0) {
            // console.log(-1)
            return -1;
        } else {
            // console.log(this.storage[this.head]);
            return this.storage[this.head];
        }       
    }

    back() {
        if (this.sizes === 0) {
            // console.log(-1)
            return -1;
        } else {
            // console.log(this.storage[this.tail]);
            return this.storage[this.tail];
        }
    }


}



const q = new Queue();


let cmd = 0;
const result = [];
for (const temp of input) {
    cmd = temp.split(" ");
    if (cmd[0] ===  "push") { q.push(parseInt(cmd[1])); }
    else if (cmd[0] ===  "pop") { result.push(q.pop()); }
    else if (cmd[0] ===  "size") { result.push(q.size()); }
    else if (cmd[0] ===  "empty") { result.push(q.empty()); }
    else if (cmd[0] ===  "front") { result.push(q.front()); }
    else if (cmd[0] ===  "back") { result.push(q.back()); }
}

console.log(result.join("\n"));