const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/11501.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input.map(item => item.split(" ").map(item2 => +item2));
const t = input[0];
input = input.slice(1);

// 뒤에서부터 돌면서 큰값을 비교
const solve = (n , arr) => {

    let answer = 0;
    const len = arr.length;
    // 비교값을 제일 마지막값으로 초기화
    let maxPrice = arr[len-1];

    for(let k = len-2; k >= 0; k--){
        // 만약 배열의 값이 더 크면 maxPrice를 갱신
        if(maxPrice < arr[k]){
            maxPrice = arr[k];
        // 비교값이 더 크면 이전에 사고 가장 큰값에 팔았다는 가정으로 차이를 answer에 더함
        }else if(maxPrice > arr[k]){
            answer += maxPrice - arr[k];
        }
    }
    return answer;
}

// 테스트케이스 하나씩 돌도록
for (let i = 0; i < t; i++){
    console.log(solve(input[i*2], input[i*2+1]));
}