const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './testcase/9342.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const answer = input.splice(1).map(str => (str.replace(/[A-F]?A+F+C+[A-F]?/, '') ? 'Good' : 'Infected!'));
console.log(answer.join('\n'));
