#!/usr/bin/env node
/* eslint-disable no-param-reassign */

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What number is missing in the progression?');
const lst = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let n = 0;
while (n < 3) {
  const first = Math.floor(Math.random() * 51);
  const step = Math.floor(Math.random() * 10) + 1;
  const unknown = Math.floor(Math.random() * 10);
  const progrAll = [];
  const progrHide = [];
  for (let i = 0; i < lst.length; i += 1) {
    progrAll.push(first + step * lst[i]);
    progrHide.push(first + step * lst[i]);
  }
  progrHide[unknown] = '..';
  console.log(`Question: ${progrHide[0]} ${progrHide[1]} ${progrHide[2]} ${progrHide[3]} ${progrHide[4]} ${progrHide[5]} ${progrHide[6]} ${progrHide[7]} ${progrHide[8]} ${progrHide[9]}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === progrAll[unknown].toString()) {
    n += 1;
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${progrAll[unknown]}'.`);
    break;
  }
}
if (n === 3) {
  console.log(`Congratulations, ${name}!`);
} else {
  console.log(`Let's try again, ${name}!`)
}
