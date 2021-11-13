const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/10384.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);

// 인덱스 별 대답을 만듬
const answers = {
    0: "Not a pangram",
    1: "Pangram!",
    2: "Double pangram!!",
    3: "Triple pangram!!!",
}

for(let i = 1; i < n+1; i++){
    const hash = new Map();

    // 모든 알파벳을 대문자로 map에 넣어줌
    for(let j = 0; j < 26; j++){
        hash.set(String.fromCharCode(j + 65), 0);
    }

    for(let j = 0; j < input[i].length; j++){
        // 정규표현식 사용
        var reg = /[a-zA-Z]/;
        
        // 알파벳인 경우
        if(reg.test(input[i][j])){
            // 대문자로 통일
            let temp = input[i][j].toUpperCase();
            hash.set(temp, (hash.get(temp) || 0) + 1);
        }
    }
    // hash의 값중에 가장 작은 값을 저장
    const hashGet = Math.min(...hash.values());
    console.log(`Case ${i}: ${answers[hashGet]}`);
}


