function solution(commands) {
  var answer = [];
  const table = [...Array(51)].map(_ => new Array(51).fill(''));
  const mergetable = [...Array(51)].map(_ => new Array(51));

  for (let i = 0; i < 51; i++) {
    for (let j = 0; j < 51; j++) mergetable[i][j] = [[i, j]];
  }

  const mergeCheckAndChangeValue = (x, y, value) => {
    for (const [xx, yy] of mergetable[x][y]) table[xx][yy] = value;
  };

  const merge = (x, y, value) => {
    for (const [xx, yy] of mergetable[x][y]) {
      // mergetable[xx][yy] = [...mergetable[x][y]];
      mergetable[xx][yy] = mergetable[x][y];
      table[xx][yy] = value;
    }
  };

  const unmerge = (x, y, value) => {
    const targetTable = mergetable[x][y];
    // const targetTable = [...mergetable[x][y]];
    for (const [xx, yy] of targetTable) {
      mergetable[xx][yy] = [[xx, yy]];
      table[xx][yy] = '';
    }
    table[x][y] = value;
  };

  for (const command of commands) {
    const check = command.split(' ');
    if ('UPDATE' === check[0]) {
      if (check.length === 3) {
        const [cmd, target, value] = command.split(' ');

        for (let i = 0; i < 51; i++) {
          for (let j = 0; j < 51; j++) {
            if (table[i][j] === target) mergeCheckAndChangeValue(i, j, value);
          }
        }
      } else {
        const [cmd, x, y, value] = command.split(' ');
        mergeCheckAndChangeValue(x, y, value);
      }
    } else if ('MERGE' === check[0]) {
      const [cmd, x1, y1, x2, y2] = command.split(' ');
      mergetable[x1][y1] = [...mergetable[x1][y1], ...mergetable[x2][y2]];
      const value = table[x1][y1] || table[x2][y2];
      merge(x1, y1, value);
    } else if ('UNMERGE' === check[0]) {
      const [cmd, x, y] = command.split(' ');
      const value = table[x][y];
      unmerge(x, y, value);
    } else if ('PRINT' === check[0]) {
      const [cmd, x, y] = command.split(' ');
      answer.push(table[x][y] ? table[x][y] : 'EMPTY');
    }
  }

  // for (const t of table) console.log(t.map(v => (v ? v : '.')).join(' '));
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
