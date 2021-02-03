import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';

export default function calc() {
  console.log('What is the result of the expression?');
  let count = 0;
  for (; count < 3;) {
    const num1 = Math.round(Math.random() * 100);
    const num2 = Math.round(Math.random() * 100);
    const arr = ['+', '-', '*'];
    const expression = num1 + arr[Math.round(Math.random() * 2)] + num2;
    const realAnswer = eval(expression);
    console.log(`Question: ${expression}`);
    const answer = Number(readlineSync.question('Your answer: '));
    if (answer === realAnswer) {
      count += 1;
      console.log('Correct!');
    } else {
      count = 0;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${realAnswer}'. Let's try again ${name}!`);
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}
