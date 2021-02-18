const even = () => {
  const greet = 'Answer "yes" if the number is even, otherwise answer "no"';
  const expr = Math.round(Math.random() * 10);
  const realAnsw = expr % 2 === 0 ? 'yes' : 'no';
  return {
    greeteng: greet,
    expression: expr,
    realAnswer: realAnsw,
  };
};

export default even;
