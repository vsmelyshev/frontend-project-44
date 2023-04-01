#!/usr/bin/env node
/* eslint-disable no-param-reassign */
import readlineSync from 'readline-sync';

const gcd = (x, y) => {
  if ((typeof x !== 'number') || (typeof y !== 'number')) {
    return false;
  }
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x;
};

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Find the greatest common divisor of given numbers.');
let n = 0;
let result = 0;
while (n < 3) {
  const number1 = Math.floor(Math.random() * 101);
  const number2 = Math.floor(Math.random() * 101);
  console.log(`Question: ${number1} ${number2}`);
  result = gcd(number1, number2);
  const answer = readlineSync.question('Your answer: ');
  if (answer === result.toString()) {
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
