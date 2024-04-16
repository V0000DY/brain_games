#!/usr/bin/env node
import task from '../src/index.js';
import { rules, evenGame } from '../src/games/even-game.js';

task(rules, evenGame);
