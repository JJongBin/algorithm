const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './2_2606.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

// console.log(input);

for (let i = 0; i < input.length; i++) {
    input[i] = input[i].split(" ").map(item => +item);
}

const n = input.shift();
const network = input.shift();

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

let result = 0;
const dfs = (graph, currentNode) => {
    let visitNode = [];
    let notVisitNode = [];

    notVisitNode.push(currentNode);
    while (notVisitNode.length !== 0){
        const temp = notVisitNode.pop();
        if(!visitNode.includes(temp)) {
            visitNode.push(temp);
            result++;
            notVisitNode =[...notVisitNode, ...graph[temp]]
        }
    }
}
dfs(graph, 1)
console.log(result-1)