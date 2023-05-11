import readlineSync from 'readline-sync';
import greeting from './cli.js';

export default function game(gameCondition, generateRound) {
  const roundCount = 3;
  const userName = greeting();
  let question;
  let answer;
  let userAnswer;
  console.log(gameCondition);
  for (let currentRound = 0; currentRound < roundCount; currentRound += 1) {
    [question, answer] = generateRound();
    console.log(`Question: ${question}`);
    userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
