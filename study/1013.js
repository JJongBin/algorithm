const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './testcase/1013.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n').slice(1);
// console.log(input);
// const answer = input.map(str => (str.replace(/(100+1+)*/g, '').replace(/(01)*/g, '') ? 'NO' : 'YES'));
// const answer = input.map(str => str.replace(/(100+1+|(01)*)/g, ''));
const answer = input.map(str =>
  str
    .split('')
    .reverse()
    .join('')
    .replace(/1+0+01/g, '')
    .replace(/10/g, '')
    ? 'NO'
    : 'YES'
);
console.log(answer.join('\n'));
