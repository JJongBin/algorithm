function solution(tickets) {
    var answer = [];
    const cityNum = tickets.length + 1;

    // 인접리스트
    const graph = {};
    for (const city of tickets){
        if(graph[city[0]] === undefined){
            graph[city[0]] = [city[1]];
        }else if(!graph[city[0]].includes(city[1])){
            graph[city[0]].push(city[1]);
        }
    }
    
    // 알파벳순으로 정렬, check obj
    const check = {};
    for(const key of Object.keys(graph)){
        graph[key].sort();
        check[key] = new Array(graph[key].length).fill(0);
    }
    // console.log(graph);
    // console.log(check);

    // 그래프(도시) 탐색
    const temp = ['ICN'];
    let flag = false;
    const DFS = (city) => {
        if(flag) return;
        if(temp.length === cityNum){
            flag = true;
            answer = [...temp];
            return;
        }
        else{
            for(let i = 0; i < graph[city].length; i++){
                if(check[city][i] === 0){
                    temp.push(graph[city][i]);
                    // console.log(temp)
                    check[city][i] = 1;
                    DFS(graph[city][i]);
                    check[city][i] = 0;
                    temp.pop();
                }
            }
        }
    }
    DFS("ICN");
    return answer;
}
// console.log(solution([["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]))
// console.log(solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]))
// console.log(solution([["ICN", "BBB"],["ICN", "CCC"],["BBB", "CCC"],["CCC", "BBB"],["CCC", "ICN"]]))
console.log(solution([["ICN", "AOO"], ["AOO", "BOO"], ["BOO", "COO"], ["COO", "DOO"], ["DOO", "EOO"], ["EOO", "DOO"], ["DOO", "COO"], ["COO", "BOO"], ["BOO", "AOO"]]))
// ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]
// ["ICN", "BBB", "CCC", "ICN", "CCC", "BBB"]
// ["ICN", "AOO", "BOO", "COO", "DOO", "EOO", "DOO", "COO", "BOO", "AOO"]
