#!/usr/bin/env node
import readlineSync from 'readline-sync';

export default function gameEngine(fun, nam) {
  let count = 0;
  let obj = fun();
  console.log(obj.greeteng);
  while (count < 3) {
    const expr = obj.expression;
    const realAnsw = obj.realAnswer;
    console.log(`Question: ${expr}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === realAnsw) {
      obj = fun();
      count += 1;
      console.log('Correct!');
    } else {
      count = 0;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${realAnsw}'. Let's try again, ${nam}!`);
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${nam}!`);
  }
}
