#!/usr/bin/env node
import generateRound from '../src/games/gcd.js';
import game from '../src/index.js';

game('Find the greatest common divisor of given numbers.', generateRound);
