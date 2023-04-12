import getRandomIntInclusive from '../util.js';
import gameEven from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const Isprime = (num) => {
  for (let i = 2; i < num; i += 1) if (num % i === 0) return false;
  return num > 1;
};

const getRoundsGame = () => {
  const question = getRandomIntInclusive(1, 100);
  const correctAnswer = Isprime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const primeGame = () => {
  gameEven(description, getRoundsGame);
};
export default primeGame;
