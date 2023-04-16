function solution(players, callings) {
  var answer = [];

  const playerOfRanks = {};
  const ranksOfPlayer = {};

  for (let i = 0; i < players.length; i++) {
    ranksOfPlayer[players[i]] = i;
    playerOfRanks[i] = players[i];
  }

  for (const calling of callings) {
    const playerRank = ranksOfPlayer[calling];
    ranksOfPlayer[playerOfRanks[playerRank - 1]] = playerRank;
    playerOfRanks[playerRank] = playerOfRanks[playerRank - 1];

    ranksOfPlayer[calling] = playerRank - 1;
    playerOfRanks[playerRank - 1] = calling;
  }

  answer = Object.entries(playerOfRanks)
    .sort((a, b) => a[0] - b[0])
    .map(p => p[1]);

  return answer;
}

console.log(solution(['mumu', 'soe', 'poe', 'kai', 'mine'], ['kai', 'kai', 'mine', 'mine']));
