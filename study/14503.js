const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../testcase/14503.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 청소가 되어 있으면 2 / 청소가 안되어 있으면 / 0 벽인 경우 1

const n = parseInt(input[0].split(" ")[0]);
const m = parseInt(input[0].split(" ")[1]);

let x = parseInt(input[1].split(" ")[0]);
let y = parseInt(input[1].split(" ")[1]);
let dir = parseInt(input[1].split(" ")[2]);

const room = input.slice(2).map(item => item.split(" ").map(item2 => +item2));

const dd = [[-1, 0], [0, 1], [1, 0], [0, -1]];

let power = true;
let answer = 0;
while(power){
    // 만약 현재 위치가 0일때 (청소할 수 있으면)
    if(room[x][y] === 0){
        // 청소한 방 갯수 카운팅
        answer++;
        // 청소했다고 체크
        room[x][y] = 2;
    }

    // 작동 중지 조건 - flood fill로 상하좌우 확인
    let stop = true;
    for(let i = 0; i < 4; i++){
        let dx = x + dd[i][0];
        let dy = y + dd[i][1];
        if(dx >= 0 && dx < n && dy >= 0 && dy < m){
            if(room[dx][dy] === 0) stop = false;
        }
    }
    let dx = x - dd[dir][0];
    let dy = y - dd[dir][1];

    // 후진 - 갈 곳이 없고 뒤에가 벽(1)일때
    if(stop && dx >= 0 && dx < n && dy >= 0 && dy < m){
        if(room[dx][dy] !== 1){
            x = dx;
            y = dy;
            continue;
        }
    }

    // 작동중지 - 갈 수 있는 곳이 없을때(사방이 0이 아님)
    if(stop) break;

    // 동서남북을 시계반대 방향으로 진행하기 위해서(0, 1, 2, 3)
    dir = dir-1 < 0 ? 3 : dir - 1;
    dx = x + dd[dir][0];
    dy = y + dd[dir][1];
    if(dx >= 0 && dx < n && dy >= 0 && dy < m){
        // 바로보는 방향이 청소가 가능하면 좌표변경
        if(room[dx][dy] === 0){
            x = dx;
            y = dy;
        }
    }
}
console.log(answer);




