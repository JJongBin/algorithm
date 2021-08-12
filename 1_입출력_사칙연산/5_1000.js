const fs = require('fs');
const filePath = "./5_1000.txt";
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0].split(' ').map((item) => +item);

const solution = function(a, b) {
    return a+b
}

console.log(solution(input[0], input[1]));