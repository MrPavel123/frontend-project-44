import getRandomIntInclusive from '../util.js';
import gameEven from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const gcd = (num1, num2) => {
  if (num2) {
    return gcd(num2, num1 % num2);
  }
  return num1;
};

const getRoundsGame = () => {
  const num1 = getRandomIntInclusive(1, 100);
  const num2 = getRandomIntInclusive(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2));
  return [question, correctAnswer];
};
const gcdGame = () => {
  gameEven(description, getRoundsGame);
};
export default gcdGame;
