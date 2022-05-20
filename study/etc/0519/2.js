function solution(M, remote_tasks, office_tasks, employees) {
  var answer = [];
  const len = employees.length;
  employees = employees.map(e => e.split(' '));
  const officeEmployees = new Array(len + 1).fill(0);
  const officeTeam = new Array(M + 1).fill(0);

  const office = new Set();
  for (const o of office_tasks) office.add(o);

  for (let i = 0; i < len; i++) {
    const employee = employees[i];
    for (let j = 1; j < employee.length; j++) {
      if (office.has(employee[j])) {
        officeEmployees[i + 1] = 1;
        officeTeam[+employee[0]]++;
        break;
      }
    }
  }

  // console.log(officeTeam);
  for (let i = 0; i < len; i++) {
    if (officeEmployees[i + 1]) continue;

    if (officeTeam[+employees[i][0]] === 0) {
      officeTeam[+employees[i][0]]++;
      continue;
    } else answer.push(i + 1);
  }

  return answer;
}

// console.log(
//   solution(
//     3,
//     ['develoment', 'marketing', 'hometask'],
//     ['recruitment', 'education', 'officetask'],
//     [
//       '1 develoment hometask',
//       '1 recruitment marketing',
//       '2 hometask',
//       '2 develoment marketing hometask',
//       '3 marketing',
//       '3 officetask',
//       '3 develoment',
//     ]
//   )
// );
// console.log(
//   solution(
//     2,
//     ['design'],
//     ['building', 'supervise'],
//     ['2 design', '1 supervise building design', '1 design', '2 design']
//   )
// );
console.log(
  solution(
    3,
    ['develoment', 'marketing', 'hometask'],
    ['recruitment', 'education', 'officetask'],
    [
      '1 develoment hometask',
      '1 recruitment marketing',
      '2 hometask',
      '2 develoment marketing hometask',
      '3 marketing',
      '3 officetask',
      '3 develoment',
      '3 marketing',
    ]
  )
);
// console.log(
//   solution(
//     2,
//     ['design'],
//     ['building', 'supervise'],
//     ['2 design', '1 supervise building design', '1 design', '2 design']
//   )
// );
// console.log(
//   solution(
//     2,
//     ['design'],
//     ['building', 'supervise'],
//     ['2 design', '1 supervise building design', '1 design', '2 design']
//   )
// );
// [14578]
// []
// [14578]
