function solution(n, computers) {
    var answer = 0;
    const check = new Array(n).fill(0);

    const dfs = (v) => {
        if(check[v] === 1) return;
        for(let k = 0; k < n; k++){
            if(computers[v][k] === 1){
                computers[v][k] = 0;
                check[v] = 1;
                dfs(k);
            }
        }
    }

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(computers[i][j] === 1){
                check[i] = 0;
                dfs(i);
                answer++;
            }
        }
    }
    return answer;
}

console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]))



