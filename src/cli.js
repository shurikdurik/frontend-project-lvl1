import readlineSync from 'readline-sync';

const name = readlineSync.question('May I have your name? ');

const helloFun = () => {
  console.log(`Hello, ${name}!`);
};

export { name, helloFun };
