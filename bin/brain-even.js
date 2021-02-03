import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';

export default function even() {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  let count = 0;
  for (; count < 3;) {
    const number = Math.round(Math.random() * 100);
    const realAnswer = number % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
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
