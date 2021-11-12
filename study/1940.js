const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1940.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
const m = parseInt(input[1]);

// 정렬
input = input[2].split(" ").map(item => +item).sort((a, b) => a - b);

// 투 포인트
let left = 0;
let right = n - 1;

let answer = 0;
while(left < right){
    // 두개의 합
    const temp = input[left] + input[right];

    // 합이 목표보디 작으면 왼쪽 인덱스 증가
    if(temp < m){
        left++;
    }
    // 합이 목표보다 크면 왼쪽 인덱스 증가
    else if(temp > m){
        right--;
    }
    // 일치하면 answer + 1
    else{
        answer++;
        left++;
        right--;
    }
}
console.log(answer);

