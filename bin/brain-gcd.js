#!/usr/bin/env node
import task from '../src/index.js';
import { rules, gcdGame } from '../src/games/gcd-game.js';

task(rules, gcdGame);
