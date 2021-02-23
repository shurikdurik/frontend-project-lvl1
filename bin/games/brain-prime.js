const checkPrime = (num) => {
  let flag = false;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      flag = true;
    }
  }
  return flag;
};

const prime = () => {
  const number = Math.round(Math.random() * 50);
  const greet = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  const expr = number;
  const realAnsw = checkPrime(number) ? 'no' : 'yes';
  return {
    greeteng: greet,
    expression: expr,
    realAnswer: realAnsw,
  };
};

export default prime;
