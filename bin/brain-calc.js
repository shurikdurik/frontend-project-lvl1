const calc = () => {
  const greet = 'What is the result of the expression?';
  const num1 = Math.round(Math.random() * 10);
  const num2 = Math.round(Math.random() * 10);
  const arr = ['+', '-', '*'];
  const expr = num1 + arr[Math.round(Math.random() * 2)] + num2;
  const realAnsw = String(eval(expr));
  return {
    greeteng: greet,
    expression: expr,
    realAnswer: realAnsw,
  };
};

export default calc;
