const fs = require('fs');
const { DefaultSerializer } = require('v8');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/2583.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0].split(" ")[0]);
const m = parseInt(input[0].split(" ")[1]);
const k = parseInt(input[0].split(" ")[2]);

// 방문했는지, 사각형이 존재하는 부분을 체크할 이차원 배열
const arr = new Array(n);
for(let i = 0; i < n; i++){
    arr[i] = new Array(m).fill(0);
}

// 사각형이 존재하는 부분의 배열 arr을 1로 변경
for(let kk = 1; kk < k+1; kk++){
    const temp = input[kk].split(" ").map(item => +item);
    for(let i = temp[1]; i < temp[3]; i++){
        for(let j = temp[0]; j < temp[2]; j++){
            arr[i][j] = 1;
        }
    }
}

// dfs로 확인
const dfs = (a, b) => {
    // 나뉜 부분의 넓이를 계산할 변수 conut
    let count = 1;
    const stack = [];
    
    // 초기값
    stack.push([a, b])
    arr[a][b] = 1

    // flood fill
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];

    while(stack.length){
        let [x, y] = stack.pop();
        // flood fill을 활용해서 확인
        for(let kkk = 0; kkk < 4; kkk++){
            let xx = x + dx[kkk];
            let yy = y + dy[kkk];
            if(xx >= 0 && xx < n && yy >= 0 && yy < m && arr[xx][yy] === 0){
                stack.push([xx, yy]);
                arr[xx][yy] = 1;
                count++;
            }
        }
    }
    return count;
}



const answer = [];
let cnt = 0;
for(let i = 0; i < n; i++){
    for(let j = 0; j < m; j++){
        if(arr[i][j] === 0){
            answer.push(dfs(i, j));
            cnt++;
        }
    }
}
console.log(cnt);
console.log(answer.sort((a, b) => a - b).join(" "));