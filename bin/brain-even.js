#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let n = 0;
while (n < 3) {
  const number = Math.floor(Math.random() * 101);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no')) {
    n += 1;
    console.log('Correct!');
  } else if (number % 2 === 0 && answer !== 'yes') {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
    n = 0;
    break;
  } else if (number % 2 !== 0 && answer !== 'no') {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
    n = 0;
    break;
  }
}
if (n === 3) {
  console.log(`Congratulations, ${name}!`);
} else {
  console.log(`Let's try again, ${name}!`);
}
