function solution(array, commands) {
    let answer = [];
    let temp = [];
    for (const cmd of commands){
        temp = [];
        for (let i = cmd[0]; i < cmd[1]+1; i++){
            temp.push(array[i-1]);
        }
        temp = temp.sort((a, b) => {return a-b});
        answer.push(temp[cmd[2]-1])
    }
    return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4],	[[2, 5, 3], [4, 4, 1], [1, 7, 3]],	[5, 6, 3]))