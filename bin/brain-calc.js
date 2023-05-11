#!/usr/bin/env node
import generateRound from '../src/games/calc.js';
import game from '../src/index.js';

game('What is the result of the expression?', generateRound);
