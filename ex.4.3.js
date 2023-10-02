
const johnScores = [89, 120, 103];
const mikeScores = [116, 94, 123];
const maryScores = [97, 134, 105];

function calculateAverage(scores) {
  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}

const johnAverage = calculateAverage(johnScores);
const mikeAverage = calculateAverage(mikeScores);
const maryAverage = calculateAverage(maryScores);

let winner = '';
let maxAverage = 0;

if (johnAverage > maxAverage) {
  maxAverage = johnAverage;
  winner = 'John';
}

if (mikeAverage > maxAverage) {
  maxAverage = mikeAverage;
  winner = 'Mike';
}

if (maryAverage > maxAverage) {
  maxAverage = maryAverage;
  winner = 'Mary';
}

const isTie = [johnAverage, mikeAverage, maryAverage].filter(avg => avg === maxAverage).length > 1;

console.log('john Average is: ' + johnAverage);
console.log('mike Average is: ' + mikeAverage);
console.log('mary Average is: ' + maryAverage);

if (isTie) {
  console.log(`It's a tie, John's average score: ${johnAverage}, Mike's average score: ${mikeAverage}, Mary's average score: ${maryAverage}`);
} else {
  console.log(`${winner} wins with an average score of ${maxAverage}`);
}
