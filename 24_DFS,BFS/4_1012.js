const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './4_1012.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < input.length; i++){
    input[i] = input[i].split(" ").map(item => +item)
}
const t = input.shift();
// console.log(input)

const solve = (x0, y0) => {
    let visit = [];
    let notVisit = [];
    if (graph[x0][y0] === 1){
        notVisit.push(`${x0}-${y0}`)
    }
    while(notVisit.length !== 0) {
        temp = notVisit.pop().split("-").map(item => +item);
        x = temp[0];
        y = temp[1];
        graph[x][y] = 0
        visit.push(`${x}-${y}`)
        
        if (x > 0) {
            if (graph[x-1][y] === 1 && !notVisit.includes(`${x-1}-${y}`)) {
                notVisit.push(`${x-1}-${y}`);
            }
        }
        if (y > 0) {
            if (graph[x][y-1] === 1 && !notVisit.includes(`${x}-${y-1}`)) {
                notVisit.push(`${x}-${y-1}`);
            }
        }
        if (x < graph.length-1) {
            if (graph[x+1][y] === 1 && !notVisit.includes(`${x+1}-${y}`)) {
                notVisit.push(`${x+1}-${y}`);
            }
        }
        if (y < graph[0].length-1) {
            if (graph[x][y+1] === 1 && !notVisit.includes(`${x}-${y+1}`)) {
                notVisit.push(`${x}-${y+1}`);
            }
        }
    }
    if (visit.length !== 0) {
        cnt++;
    }
}

let cnt = 0;

for (let i = 0; i < input.length; i++) {
    if(input[i].length === 3) {
        n = input[i][0];
        m = input[i][1];
        k = input[i][2];
        graph = [];
        cnt = 0;
        for (let j = 0; j < n; j++){
            graph.push(new Array(m).fill(0))
        }
        for (let j = 1; j < k+1; j++){
            graph[input[i+j][0]][input[i+j][1]] = 1
        }
        for (let j = 1; j < k+1; j++){
            solve(input[i+j][0], input[i+j][1], graph);
        }
        console.log(cnt);
    }
}
// 
// console.log(result);