#!/usr/bin/env node

import { helloFun } from '../src/cli.js';
import game from './brain-even.js';

console.log('Welcome to Brain Games');

helloFun();

game();
