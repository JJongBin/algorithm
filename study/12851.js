const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../testcase/12851.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0].split(" ")[0]);
const k = parseInt(input[0].split(" ")[1]);

const bfs = () => {
    const answer = [0, 0];
    // 만약 제자리이면 움직이지 않고 하나의 경우의 수로 도착
    if(n === k)return [0, 1];
    // 만약 수빈이가 더 뒤에 있으면 무조건 -1이므로 n-k
    if(n > k) return [n-k, 1];

    // 기본 셋팅
    queue.push(n);
    // 동생을 찾았는지
    let flag = false;
    while(queue.length > 0){
        if(flag) return answer;
        const len = queue.length;
        
        for(let i = 0; i < len; i++){
            let x = queue.shift();
            check[x] = 1;
            // 세가지 경우
            for(const dx of [x*2, x+1, x-1]){
                // 갈 수 있는 index이고, 방문하지 않는 위치라면!
                if(dx >= 0 && dx <= 100000 && check[dx] === 0){
                    if(dx === k) {
                        // 동생을 찾았음을 알림
                        flag = true;
                        // 경우의 수에 더해줌
                        answer[1]++;
                    }
                    queue.push(dx);
                }
            }
        }
        answer[0]++;
    }
}
const check = new Array(100001).fill(0);
const queue = [];
console.log(bfs().join("\n"));



