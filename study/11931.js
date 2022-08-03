const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/11931.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
input.shift();
console.log(input.sort((a, b) => b - a).join('\n'));
