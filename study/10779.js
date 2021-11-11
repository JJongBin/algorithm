const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/10779.txt';

let input = fs.readFileSync(filePath).toString().trim();

let answer = 0;
// 스텍을 이용
const stack = [];

for(let i = 0; i < input.length; i++){
    
    // 만약 레이져를 쏘는 (가 아닐 경우, 각각의 선이 잘린 개수를 넣어줌
    if(input[i] === "(" && input[i+1] !== ")"){
        stack.push(1);
    }
    // 레이져를 쏘면 가장 위의 선이 잘리므로 +1 
    else if(input[i] === "(" && input[i+1] === ")" && stack.length > 0){
        stack[stack.length-1]++;
    }
    // 결과를 반환하는 경우(레이저가 아니고 )인 경우), 결과를 더해주고 겹친 선들도 계속 잘려왔기 때문에 스텍의 가장 윗 요소 빼고 다음 스텍의 상단에 더해줌
    else if(input[i] === ")" && input[i-1] !== "(" && stack.length > 0){
        let temp = stack.pop();
        answer += temp;
        if(stack.length > 0) stack[stack.length-1] += temp-1;
    }
}
console.log(answer);

