const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './testcase/9996.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n').slice(1);

const pattern = input.shift().replace(/\*/, '[a-z]*');
const reg = new RegExp(`${pattern}`);

const answer = input.map(str => (str.replace(reg, '') ? 'NE' : 'DA'));
console.log(answer.join('\n'));
