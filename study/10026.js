const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/10026.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input.shift());
input = input.map(item => item.split(""));
// console.log(n)
// console.log(input)

let answer1 = 0;
let answer2 = 0;
let input2 = new Array(input.length);
for(let i = 0; i < input.length; i++){
    input2[i] = [...input[i]];
}

const dx = [0, 1, 0, -1]; 
const dy = [-1, 0, 1, 0];

const dfs = (x, y, color, check) => {
    check[x][y] = 0;
    for(let k = 0; k < 4; k++){
        let xx = x + dx[k];
        let yy = y + dy[k];
        if(color === true){
            if(xx >= 0 && xx < input.length && yy >= 0 && yy < input.length && (check[xx][yy] === "R" || check[xx][yy] === "G")){
                dfs(xx, yy, color, check);
                
            }
        }
        else if(xx >= 0 && xx < input.length && yy >= 0 && yy < input.length && check[xx][yy] === color){
            dfs(xx, yy, color, check);
        }
    }
}


for(let i = 0; i < input.length; i++){
    for(let j = 0; j < input[0].length; j++){
        if(input[i][j] !== 0){
            dfs(i, j, input[i][j], input);
            answer1++;
        }
    }
}
for(let i = 0; i < input.length; i++){
    for(let j = 0; j < input[0].length; j++){
        if(input2[i][j] !== 0){
            if(input2[i][j] === "R" || input2[i][j] === "G"){
                dfs(i, j, true, input2);
            }else{
                dfs(i, j, input2[i][j], input2);
            }
            answer2++;
        }
    }
}
console.log(answer1, answer2);


