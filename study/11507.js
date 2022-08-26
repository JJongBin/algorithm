const fs = require('fs');

let input = fs.readFileSync(0).toString().trim().split('\n')[0];

const cards = { P: 13, K: 13, H: 13, T: 13 };
const hash = new Set();
const lostCard = input.match(/[A-Z][0-9][0-9]/g);
for (const card of lostCard) {
  if (hash.has(card)) continue;
  cards[card[0]]--;
  hash.add(card);
}

if (hash.size !== lostCard.length) console.log('GRESKA');
else console.log(`${cards['P']} ${cards['K']} ${cards['H']} ${cards['T']}`);
