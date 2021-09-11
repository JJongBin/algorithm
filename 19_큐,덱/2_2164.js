const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './2_2164.txt'; 

let input = fs.readFileSync(filePath).toString().trim();

class Deck {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(card) {
        const node = {card};
        if (this.size === 0){
            this.head = node;
        }else {
            this.tail.next = node;
        }
        this.tail = node;
        this.size++;
    }

    pop() {
        if (this.size !== 0){
            const value = this.head.card;
            this.head = this.head.next;
            this.size--;
            return value;
        }
    }
}


const deck = new Deck();

for (let i = 1; i<parseInt(input)+1; i++){
    deck.push(i);
}
// console.log(deck)
while(deck.size !== 1) {
    deck.pop();
    deck.push(deck.pop());
}
console.log(deck.head.card);





