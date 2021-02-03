#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { helloFun } from '../src/cli.js';
import even from './brain-even.js';
import calc from './brain-calc.js';

export default function app() {
  console.log('Welcome to Brain Games');
  helloFun();
  const choose = readlineSync.question('Please, choose the game ("calc" or "even"): ');
  if (choose === 'calc') {
    return calc();
  }
  if (choose === 'even') {
    return even();
  }
}
