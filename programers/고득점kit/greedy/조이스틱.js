function solution(name) {
    var answer = 0;
    const len = name.length;
    let nameIdx = 0;
    let temp1, temp2;
    let min = len - 1;
    for(let i = 0; i < len; i++){
        if(name[i] !== "A"){
            // temp1 = Math.min((i - nameIdx), (len-i+nameIdx));
            // temp2 = Math.min((name[i].charCodeAt()-65), (26-name[i].charCodeAt()+65));
            // temp = temp1 + temp2;
            // answer += temp;
            // nameIdx = i;

            temp2 = Math.min((name[i].charCodeAt()-65), (26-name[i].charCodeAt()+65));
            answer += temp2;
            nameIdx = i;
        }
        nextIndex = i + 1;
        while (nextIndex < len && name[nextIndex] === 'A') nextIndex++;
        min = Math.min(min, (i * 2) + len - nextIndex);
    }
    answer += min;
    return answer;
}
console.log(solution("JEROEN"));
console.log(solution("JAZ"));
console.log(solution("JAN"));
console.log(solution("ABABAAAAAAABA"));
console.log(solution("ABAAAAAAAAABB"));
