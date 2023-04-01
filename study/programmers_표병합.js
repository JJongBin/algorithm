function solution(commands) {
  var answer = [];

  const cell = [...Array(51)].map(_ => new Array(51).fill(''));
  const mergeCheck = [...Array(51)].map(_ => new Array(51));
  for (let i = 1; i < 51; i++) {
    for (let j = 1; j < 51; j++) {
      mergeCheck[i][j] = [i, j];
    }
  }

  const updateOne = (r, c, value) => {
    const [checkR, checkC] = mergeCheck[r][c];
    cell[checkR][checkC] = value;
  };

  const update = (value1, value2) => {
    for (let i = 1; i < 51; i++) {
      for (let j = 1; j < 51; j++) {
        if (cell[i][j] === value1) cell[i][j] = value2;
      }
    }
  };

  const merge = (r1, c1, r2, c2) => {
    const [checkR1, checkC1] = mergeCheck[r1][c1];
    const [checkR2, checkC2] = mergeCheck[r2][c2];
    const value = cell[checkR1][checkC1] || cell[checkR2][checkC2];

    for (let i = 1; i < 51; i++) {
      for (let j = 1; j < 51; j++) {
        const [checkI, checkJ] = mergeCheck[i][j];
        if (checkI === checkR1 && checkJ === checkC1) mergeCheck[i][j] = [checkR1, checkC1];
        else if (checkI === checkR2 && checkJ === checkC2) mergeCheck[i][j] = [checkR1, checkC1];
        else continue;
        cell[i][j] = '';
      }
    }
    updateOne(checkR1, checkC1, value);
  };

  const unmerge = (r, c) => {
    const [checkR, checkC] = mergeCheck[r][c];
    const value = cell[checkR][checkC];
    for (let i = 1; i < 51; i++) {
      for (let j = 1; j < 51; j++) {
        const [checkI, checkJ] = mergeCheck[i][j];
        if (checkI === checkR && checkJ === checkC) {
          mergeCheck[i][j] = [i, j];
          cell[i][j] = '';
        }
      }
    }
    updateOne(r, c, value);
  };

  const print = (r, c) => {
    const [checkR, checkC] = mergeCheck[r][c];
    answer.push(cell[checkR][checkC] ? cell[checkR][checkC] : 'EMPTY');
  };

  for (const command of commands) {
    const cmd = command.split(' ');
    if (cmd[0] === 'UPDATE') {
      if (cmd.length === 4) updateOne(cmd[1], cmd[2], cmd[3]);
      else update(cmd[1], cmd[2]);
    } else if (cmd[0] === 'MERGE') {
      merge(cmd[1], cmd[2], cmd[3], cmd[4]);
    } else if (cmd[0] === 'UNMERGE') {
      unmerge(cmd[1], cmd[2]);
    } else if (cmd[0] === 'PRINT') {
      print(cmd[1], cmd[2]);
    }
  }

  return answer;
}

console.log(
  solution([
    'UPDATE 1 1 menu',
    'UPDATE 1 2 category',
    'UPDATE 2 1 bibimbap',
    'UPDATE 2 2 korean',
    'UPDATE 2 3 rice',
    'UPDATE 3 1 ramyeon',
    'UPDATE 3 2 korean',
    'UPDATE 3 3 noodle',
    'UPDATE 3 4 instant',
    'UPDATE 4 1 pasta',
    'UPDATE 4 2 italian',
    'UPDATE 4 3 noodle',
    'MERGE 1 2 1 3',
    'MERGE 1 3 1 4',
    'UPDATE korean hansik',
    'UPDATE 1 3 group',
    'UNMERGE 1 4',
    'PRINT 1 3',
    'PRINT 1 4',
  ])
);

console.log(
  solution([
    'UPDATE 1 1 a',
    'UPDATE 1 2 b',
    'UPDATE 2 1 c',
    'UPDATE 2 2 d',
    'MERGE 1 1 1 2',
    'MERGE 2 2 2 1',
    'MERGE 2 1 1 1',
    'PRINT 1 1',
    'UNMERGE 2 2',
    'PRINT 1 1',
  ])
);
