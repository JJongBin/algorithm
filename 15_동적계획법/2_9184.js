// if a <= 0 or b <= 0 or c <= 0, then w(a, b, c) returns:
//     1

// if a > 20 or b > 20 or c > 20, then w(a, b, c) returns:
//     w(20, 20, 20)

// if a < b and b < c, then w(a, b, c) returns:
//     w(a, b, c-1) + w(a, b-1, c-1) - w(a, b-1, c)

// otherwise it returns:
//     w(a-1, b, c) + w(a-1, b-1, c) + w(a-1, b, c-1) - w(a-1, b-1, c-1)


// 메모제이션?
// 값을 미리 저장해둠으로 걸리는 시간 단축
// 최대 20


const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : "./2_9184.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n');


const w = (a,b,c) => {
    if (a <= 0 || b <= 0 || c <= 0) {
        return 1
    }
    if (a > 20 || b > 20 || c > 20) {
        return w(20, 20, 20)
    }
    if (temp[a][b][c]) {
        return temp[a][b][c]
    }
    if (a < b && b < c) {
        temp[a][b][c] = w(a, b, c-1) + w(a, b-1, c-1) - w(a, b-1, c)
        return temp[a][b][c]
    }
    temp[a][b][c] = w(a-1, b, c) + w(a-1, b-1, c) + w(a-1, b, c-1) - w(a-1, b-1, c-1)
    return temp[a][b][c]
}

let i;
temp = [] 

for (i = 0; i<21; i++) {
    temp.push([]);
    for (let j = 0; j<21; j++) {
        temp[i].push([]);
    }
}


for (i = 0; i<input.length; i++) {
    let data = input[i].split(" ").map((item) => +item);
    if (data[0] === -1 && data[1] === -1 && data[2] === -1) {
        break
    }
    const output = w(data[0], data[1], data[2])
    console.log(`w(${data[0]}, ${data[1]}, ${data[2]}) = ${output}`)
}
