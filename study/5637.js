const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './testcase/5637.txt';

let input = fs.readFileSync(filePath).toString().trim();

const answer = input.match(/[a-zA-z\-]+/gi).reduce((prev, curr) => {
  return prev.length >= curr.length ? prev : curr;
}, '');
console.log(answer.toLowerCase());
