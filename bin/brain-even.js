#!/usr/bin/env node
import generateRound from '../src/games/even.js';
import game from '../src/index.js';

game('Answer "yes" if the number is even, otherwise answer "no".', generateRound);
