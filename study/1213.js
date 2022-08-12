const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1213.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n')[0].split('').sort();

const hash = new Map();
for (const str of input) hash.set(str, (hash.get(str) || 0) + 1);

let isOdd = false;
let flag = false;
for (const k of hash.keys()) {
  if (hash.get(k) % 2 === 1) {
    if (isOdd) flag = true;
    hash.set(k, hash.get(k) - 1);
    isOdd = k;
  }
  hash.set(k, hash.get(k) / 2);
}

if (flag) console.log("I'm Sorry Hansoo");
else {
  let str = '';
  for (const [k, v] of hash.entries()) str += k.repeat(v);

  console.log(str + (isOdd ? isOdd : '') + str.split('').reverse().join(''));
}
