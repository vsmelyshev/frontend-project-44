#!/usr/bin/env node
import readlineSync from 'readline-sync';

const primeCheck = (x) => {
  let isPrime = true;
  for (let i = 2; i < x; i += 1) {
    if (x % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    return 'yes';
  }
  return 'no';
};
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!\nAnswer "yes" if given number is prime. Otherwise answer "no".`);
let n = 0;
let result = 'no';
while (n < 3) {
  const number = Math.floor(Math.random() * 99) + 2;
  console.log(`Question: ${number}`);
  result = primeCheck(number);
  const answer = readlineSync.question('Your answer: ');
  if (answer === result) {
    n += 1;
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`);
    break;
  }
}
if (n === 3) {
  console.log(`Congratulations, ${name}!`);
} 
