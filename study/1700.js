const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../testcase/1700.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0].split(" ")[0]);
const m = parseInt(input.shift().split(" ")[1]);
input = input[0].split(" ").map(item => +item);

// 제품이 콘센트에 꽂혀있는지 확인
const check = new Array(m+1).fill(0);

// 제품이 총 몇개 존재하는지
const hash = new Map();
for(let i = 0; i < input.length; i++){
    hash.set(input[i], (hash.get(input[i]) || 0) + 1);
}

let answer = 0;
let cnt = 0;
for (let i = 0; i < input.length; i++){
    // 콘센트에 그냥 꽂을 수 있는 경우
    if(check[input[i]] === 0 && cnt < n){
        check[input[i]] = 1;
        cnt++;

    // 현 제품이 꽂혀있지 않은데 콘센트가 다 차있는 경우
    }else if(check[input[i]] === 0 && cnt === n){
        // 뽑을 제품을 저장할 변수
        let code = 0;
        
        // 꽂혀있는 개수를 임시로 temp에 저장 -> 현제 제품의 다음부터 확인하는데 꽂혀있는 제품이 있으면 -1 (37번째 라인 if문)
        let temp = cnt;
        const tempArr = new Array(101).fill(0);
        // 다음 제품부터 확인
        for(let j = i+1; j < input.length; j++){
            // 제품이 꽂혀있고, 다음 제품을 확인
            if(check[input[j]] === 1 && tempArr[input[j]] === 0){
                tempArr[input[j]] = 1

                // 더이상 꽂을 제품이 존재하지 않는 경우
                if(hash.get(input[j]) === 0){
                    code = input[j];
                    break;
                }

                // 현재 if문에 들어온건 제품이 꽂혀있다는 뜻으로, 마지막으로 등장하는 꽂혀있는 제품을 찾기위함
                temp--;

                // 꽂혀있는 제품중에 제일 마지막 제품에 해당할 부분
                if(temp <= 0){
                    code = input[j];
                    break;
                }
            }
        }
        check[code] = 0;
        check[input[i]] = 1;
        answer++;
    }
    hash.set(input[i], hash.get(input[i]) - 1);
}
console.log(answer);
