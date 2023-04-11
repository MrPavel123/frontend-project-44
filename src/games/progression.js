import getRandomIntInclusive from '../util.js';
import gameEven from '../index.js';

const description = 'What number is missing in the progression?';
const progressionLength = 20;

const getProgression = (start, diff, length) => {
  const array = [];
  for (let i = 0; i < length; i += 1) {
    const result = (start + (diff * i));
    array.push(result);
  }
  return array;
};
const getRoundsGame = () => {
  const start = getRandomIntInclusive(1, 20);
  const diff = getRandomIntInclusive(1, 20);
  const missingElement = getRandomIntInclusive(1, progressionLength - 1);
  const progress = getProgression(start, diff, progressionLength);
  const correctAnswer = `${progress.splice(missingElement, 1, '..')}`;
  const question = progress.join(' ');

  return [question, correctAnswer];
};

const goGame = () => gameEven(description, getRoundsGame);

export default goGame;
