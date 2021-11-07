"use strict";
const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/2667.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
input = input.slice(1).map(item => item.split("").map(item2 => +item2));

// 레벨을 판단(단지내 집의 개수)
let L = 0;

// 방문했는지를 확인하는 배열
const check = new Array(n);
for(let i = 0; i < n; i++){
    check[i] = new Array(n).fill(0);
}

// console.log(check)
// console.log(input)

// dfs로 재귀함수를 이용
const dfs = (x, y) => {
    // flood fill
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    check[x][y] = 1;
    L++;
    
    for(let k = 0; k < 4; k++){
        const xx = x + dx[k];
        const yy = y + dy[k];
        
        // 방문하지 않았고 해당 좌표의 값이 1이면 
        if(xx >= 0 && xx < n && yy >= 0 && yy < n && check[xx][yy] === 0 && input[xx][yy] === 1){
            dfs(xx, yy);
        }
    }
}

// 단지내 집의 개수를 저장할 배열
const answer = [];
for (let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        if(check[i][j] === 0 && input[i][j] === 1){
            // 레벨 초기화
            L = 0;
            dfs(i, j);
            answer.push(L);
        }
    }
}

console.log(answer.length);
console.log(answer.sort((a, b) =>  a- b).join("\n"))