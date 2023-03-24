#!/usr/bin/env node
console.log('node bin/brain-games.js\nWelcome to the Brain Games!');
import readlineSync from 'readline-sync';
const name = readlineSync.question('May I have ypur name? ');
console.log('Hello, ' + name + '!');
