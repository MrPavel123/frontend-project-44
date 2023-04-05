import readlineSync from 'readline-sync';

const countRounds = 3;
const gameEven = (answer, newRound) => {
  console.log('Welcome to the brain games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);

  console.log(answer);

  for (let i = 0; i < countRounds; i += 1) {
    const [question, corrAnswer] = newRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (corrAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${corrAnswer}'.`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${username}!`);
};
export default gameEven;
