#!/usr/bin/env node
import readlineSync from 'readline-sync';
import even from '../bin/games/brain-even.js';
import calc from '../bin/games/brain-calc.js';
import nod from '../bin/games/brain-nod.js';
import prime from '../bin/games/brain-prime.js';
import gameEngine from '../bin/brain-games.js';
import helloFun from './cli.js';
import progression from '../bin/games/brain-progression.js';

console.log('Welcome to Brain Games');
const name = readlineSync.question('May I have your name? ');
helloFun(name);

function app() {
  const games = [even, calc, nod, prime, progression];
  const gamesName = ['even', 'calc', 'nod', 'prime', 'progression'];
  const index = readlineSync.keyInSelect(gamesName, 'Please, choose the game: ');
  gameEngine(games[index], name);
}

app();
