#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('node bin/brain-games.js\nWelcome to the Brain Games!');
const name = readlineSync.question('May I have ypur name? ');
console.log(`Hello, ${name}!`);
