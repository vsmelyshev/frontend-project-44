#!/usr/bin/env node
import generateRound from '../src/games/prime.js';
import game from '../src/index.js';

game('Answer "yes" if given number is prime. Otherwise answer "no".', generateRound);
