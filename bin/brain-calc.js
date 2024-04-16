#!/usr/bin/env node
import task from '../src/index.js';
import { rules, calcGame } from '../src/games/calc-game.js';

task(rules, calcGame);
