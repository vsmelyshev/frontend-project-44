#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');
const operands = ['+', '-', '*'];
let n = 0;
let result = 0;
while (n < 3) {
  const number1 = Math.floor(Math.random() * 101);
  const number2 = Math.floor(Math.random() * 101);
  const randOper = Math.floor(Math.random() * 3);
  console.log(`Question: ${number1} ${operands[randOper]} ${number2}`);
  if (randOper === 0) {
    result = number1 + number2;
    const answer = readlineSync.question('Your answer: ');
    if (result.toString() === answer) {
      console.log('Correct!');
      n += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  } else if (randOper === 1) {
    result = number1 - number2;
    const answer = readlineSync.question('Your answer: ');
    if (result.toString() === answer) {
      console.log('Correct!');
      n += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  } else if (randOper === 2) {
    result = number1 * number2;
    const answer = readlineSync.question('Your answer: ');
    if (result.toString() === answer) {
      console.log('Correct!');
      n += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
}
if (n === 3) {
  console.log(`Congratulations, ${name}!`);
}
