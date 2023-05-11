#!/usr/bin/env node
import generateRound from '../src/games/progression.js';
import game from '../src/index.js';

game('What number is missing in the progression?', generateRound);
