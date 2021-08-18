const fs = require("fs");
const { METHODS } = require("http");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './7_2579.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

n = input[0];
input.shift();
input = input.map((item) => +item);     // 숫자 타입으로 타입변환

let temp = [];

// 3번째 합까지 미리 계산해줌ㄴ
temp[0] = input[0];
temp[1] = input[0]+input[1];
temp[2] = Math.max(input[0]+input[2], input[1]+input[2]);

for (let i = 3; i<input.length; i++) {
    const way1 = temp[i-3] + input[i-1] + input[i];     // 3개 블록(3개전의 블록합 + 전블록 + 현재블록)
    const way2 = temp[i-2] + input[i];      // 2개 블록 (2개전의 블록합 + 현재블록)
    temp[i] = Math.max(way1, way2);
}
console.log(temp[n-1]);