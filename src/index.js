#!/usr/bin/env node
import readlineSync from 'readline-sync';
import even from '../bin/brain-even.js';
import calc from '../bin/brain-calc.js';
import gameEngine from '../bin/brain-games.js';
import { helloFun } from './cli.js';

function app() {
  const choose = readlineSync.question('Please, choose the game ("calc" or "even"): ');
  if (choose === 'calc') {
    gameEngine(calc, name);
  }
  if (choose === 'even') {
    gameEngine(even, name);
  }
}

console.log('Welcome to Brain Games');
const name = readlineSync.question('May I have your name? ');
helloFun(name);
app();
export default name;
