#!/usr/bin/env node
import task from '../src/index.js';
import { rules, progressionGame } from '../src/games/progression-game.js';

task(rules, progressionGame);
