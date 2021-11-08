const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1759.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [l, c] = input.shift().split(" ").map(item => +item);

// 정렬
input = input[0].split(" ").sort();

// 단어를 저장할 배열
const answer = [];

// 해당 알파벳을 사용했는지 확인(중복 x)
const check = new Array(c).fill(0);
// 모음과 자음의 사용횟수를 저장
const alpha = [0, 0];

const dfs = (str, idx) => {
    // 개수를 충족하고, 문자의 조건에 맞으면 join해서 push
    if(str.length === l && alpha[0] >= 1 && alpha[1] >= 2){
        answer.push(str.join(""));
        return;
    };
    // 다음 index부터 시작
    for(let j = idx+1; j < c; j++){
        // 아직 사용하지 않은 알파벳이면
        if(check[j] === 0){
            // 모음자음을 판별할 초기값
            let checkAlpha = false;
            // 모음자음 확인
            if(['a', 'e', 'i', 'o', 'u'].indexOf(input[j]) !== -1){
                checkAlpha = true;
            }
            str.push(input[j]);
            if(checkAlpha)alpha[0]++;
            else alpha[1]++;
            check[j] = 1;
            dfs(str, j);
            check[j] = 0;
            if(checkAlpha)alpha[0]--;
            else alpha[1]--;
            str.pop();
        }
    }
}


// 초기값을 할당하고 이후 DFS
for(let i = 0; i < c-l+1; i++){
    let L = 0;
    let str = [input[i]];
    let checkAlpha = false;
    if(['a', 'e', 'i', 'o', 'u'].indexOf(input[i]) !== -1){
        checkAlpha = true;
    }
    check[i] = 1;
    if(checkAlpha)alpha[0]++;
    else alpha[1]++;
    dfs(str, i);
    if(checkAlpha)alpha[0]--;
    else alpha[1]--;
    check[i] = 0;
}
console.log(answer.join("\n"));