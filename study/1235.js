const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1235.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = parseInt(input[0]);

const len = input[1].length;
let answer = 0;

// 뒤에서 부터 어디서 자를지 (for문을 거꾸로)
outer: for(let i = len-1; i >= 0; i--){
    const check = new Set();
    // set 자료형에 값을 넣음(중복은 제외됨)
    for(let j = 1; j < n+1; j++){
        check.add(input[j].substr(i));
    }
    // 만약 set의 크기가 학생의 수와 동일하면 출력
    if(check.size === n ){
        answer = len-i;
        break outer;
    }
}
console.log(answer);