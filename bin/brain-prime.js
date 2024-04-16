#!/usr/bin/env node
import task from '../src/index.js';
import { rules, primeGame } from '../src/games/prime-game.js';

task(rules, primeGame);
