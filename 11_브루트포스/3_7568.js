const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './3_7568.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
n = parseInt(input[0])
input.shift(); 

const s = Array.from({length: n}, () => 1);

for (let i = 0; i<input.length; i++){
    for (let j = 0; j<input.length; j++){
        const weight = parseInt(input[i].split(" ")[0]);
        const compareWeight = parseInt(input[j].split(" ")[0]);
        const height = parseInt(input[i].split(" ")[1]);
        const compareHeight = parseInt(input[j].split(" ")[1]);

        if (weight < compareWeight && height < compareHeight){
            if (weight !== compareWeight || height !==compareHeight){
                s[i] += 1;
            }
        }
    }
}
console.log(s.join(" "));