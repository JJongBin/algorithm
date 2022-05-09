function solution(fees, records) {
  var answer = [];
  const splitRecords = records.map(item => item.split(' '));

  const carPark = new Map();
  const timeOfCar = new Map();

  for (const record of splitRecords) {
    const temp = record[0].split(':').map(Number);
    const time = temp[0] * 60 + temp[1];
    if (record[2] === 'IN') carPark.set(record[1], time);
    else {
      timeOfCar.set(record[1], (timeOfCar.get(record[1]) || 0) + (time - carPark.get(record[1])));
      carPark.delete(record[1]);
    }
  }

  for (const [car, time] of carPark.entries()) timeOfCar.set(car, (timeOfCar.get(car) || 0) + (23 * 60 + 59 - time));

  const timeOfCarArr = [...timeOfCar.entries()].sort((a, b) => +a[0] - +b[0]);
  for (const [car, time] of timeOfCarArr) {
    let fee = fees[1];
    if (fees[0] < time) fee += Math.ceil((time - fees[0]) / fees[2]) * fees[3];
    answer.push(fee);
  }

  return answer;
}

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      '05:34 5961 IN',
      '06:00 0000 IN',
      '06:34 0000 OUT',
      '07:59 5961 OUT',
      '07:59 0148 IN',
      '18:59 0000 IN',
      '19:09 0148 OUT',
      '22:59 5961 IN',
      '23:00 5961 OUT',
    ]
  )
);
