import getRandomIntInclusive from '../util.js';
import gameEven from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const round = () => {
  const question = getRandomIntInclusive(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const evenGame = () => {
  gameEven(description, round);
};
export default evenGame;
