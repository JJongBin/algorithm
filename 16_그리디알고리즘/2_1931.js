const fs = require("fs");
const filePath = process.platform === 'linux'? "/dev/stdin" : "./2_1931.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = input[0];
input.shift();
let i;

for (i = 0; i < n; i++) {
    input[i] = input[i].split(" ").map(item => +item)
}

// 시작시간이 더 큰수가 기준이 되면 안되기 때문에 시작시간을 기준으로 정렬, 끝나는 시간을 기준으로 정렬 (총 두번 정렬)
input.sort((a, b) => a[0] - b[0]);
input.sort((a, b) => a[1] - b[1]);

let result = 1;
let temp = input[0][1];
for (i = 0; i < n-1; i++) {
    if (input[i+1][0] >= temp) {
        result += 1;
        temp = input[i+1][1]
    }
}

console.log(result);