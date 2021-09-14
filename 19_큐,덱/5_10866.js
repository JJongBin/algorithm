const fs = require("fs")
const filePath = process.platform === 'linux' ? "/dev/stdin" : "./5_10866.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
input.shift();


class Deque {
    constructor() {
        this.head = null;
        this.tail = null;
        this.sizes = 0;
    }

    push_front(data) {
        const node = { data };
        if (this.head === null){
            this.head = node;
            this.tail = node;
        }
        else {
            let temp = this.head;
            temp.prev = node
            this.head = node;
            this.head.next = temp;
        }
        this.sizes++;
    }
    
    push_back(data) {
        const node = { data };
        if (this.head === null){
            this.head = node;
            this.tail = node;
        }
        else {
            const temp = this.tail
            temp.next = node;
            this.tail = node;
            this.tail.prev = temp
        }
        this.sizes++;
    }

    pop_front() {
        if (this.head === null){
            return -1;
        }else {
            const temp = this.head;
            this.head = this.head.next;

            if (this.sizes === 1){
                this.head = null
                this.tail = null
            }
            this.sizes--;
            return temp.data;
        }
    }

    pop_back() {
        if (this.head === null){
            return -1;
        }else {
            const temp = this.tail;
            this.tail = temp.prev;

            if (this.sizes === 1){
                this.head = null
                this.tail = null
            }
            this.sizes--;
            return temp.data;
        }
    }

    size() {
        return this.sizes;
    }

    empty() {
        if(this.sizes === 0) {
            return 1
        } else {
            return 0
        }
    }

    front() {
        if(this.sizes === 0) {
            return -1
        } else {
            return this.head.data;
        }
    }
    
    back() {
        if(this.sizes === 0) {
            return -1
        } else {
            return this.tail.data;
        }
    }

}

const deque = new Deque()
const result = [];

for (let cmd of input){
    cmd = cmd.split(" ");
    if (cmd[0] ===  "push_front") { deque.push_front(parseInt(cmd[1])); }
    if (cmd[0] ===  "push_back") { deque.push_back(parseInt(cmd[1])); }
    else if (cmd[0] ===  "pop_front") { result.push(deque.pop_front()); }
    else if (cmd[0] ===  "pop_back") { result.push(deque.pop_back()); }
    else if (cmd[0] ===  "size") { result.push(deque.size()); }
    else if (cmd[0] ===  "empty") { result.push(deque.empty()); }
    else if (cmd[0] ===  "front") { result.push(deque.front()); }
    else if (cmd[0] ===  "back") { result.push(deque.back()); }
}

console.log(...result);

