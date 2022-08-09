const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/10815.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();
const num = input.shift().split(' ').map(Number);
const hash = new Set(num);

const m = +input.shift();
const compare = input.shift().split(' ').map(Number);
console.log(compare.map(n => (hash.has(n) ? 1 : 0)).join(' '));
