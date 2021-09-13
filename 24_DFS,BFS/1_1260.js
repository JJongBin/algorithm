const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './1_1260.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
    input[i] = input[i].split(" ").map(item => +item);
}
const n = input[0][0];
const m = input[0][1];
const v = input[0][2];
input.shift();

// input.sort((a, b) => {return a[0] - b[0]})
// input.sort((a, b) => {return a[1] - b[1]})

const graph = {};
for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < 2; j++){
        if(graph[input[i][j]] === undefined){
            graph[input[i][j]] = j === 0 ? [input[i][1]] : [input[i][0]]
        } else if (graph[input[i][0]].indexOf(input[i][1]) === -1){
            graph[input[i][0]].push(input[i][1])
        } else if (graph[input[i][1]].indexOf(input[i][0]) === -1){
            graph[input[i][1]].push(input[i][0])
        }
    }
}
// console.log(graph)

function dfs(graph, v) {
    let visit = [];
    let notVisit = [];

    notVisit.push(v);
    while(notVisit.length > 0) {
        const temp = notVisit.pop();
        if(visit.indexOf(temp) === -1){
            visit.push(temp)
            if (graph[temp] !== undefined){
                notVisit = [...notVisit, ...(graph[temp].sort((a, b) => {return b-a}))];
            }
        }
    }
    console.log(visit.join(" "))
}

function bfs(graph, v) {
    let visit = [];
    let notVisit = [];
    
    notVisit.push(v);
    while(notVisit.length > 0) {
        
        const temp = notVisit.shift();
        if(visit.indexOf(temp) === -1){
            visit.push(temp)
            if (graph[temp] !== undefined){
                notVisit = [...notVisit, ...(graph[temp].sort((a, b) => {return a-b}))];
            }
        }
    }
    console.log(visit.join(" "))
}

dfs(graph, v)
bfs(graph, v)
