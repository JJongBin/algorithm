const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './3_1904.txt';

const input = parseInt(fs.readFileSync(filePath).toString().trim());


temp = []
temp[1] = 1
temp[2] = 2
if(input >= 3) {
    for (let i = 3; i<=input; i++) {
        temp[i] = (temp[i-1] + temp[i-2]) % 15746
    }
}
console.log(temp[input])