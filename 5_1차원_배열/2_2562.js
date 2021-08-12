const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './2_2562.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((item) => +item);

let maxNum = 0
for (let i = 0; i < input.length; i++){
    if (maxNum < input[i]){
        maxNum = input[i]
    }
}
console.log(maxNum)
console.log(input.indexOf(maxNum)+1)