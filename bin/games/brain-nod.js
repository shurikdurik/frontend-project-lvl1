function NOD(x, y) {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
}

const nod = () => {
  const greet = 'What is the result of the expression?';
  const num1 = Math.round(Math.random() * 10);
  const num2 = Math.round(Math.random() * 10);
  const expr = `${num1}, ${num2}`;
  const realAnsw = String(NOD(num1, num2));
  return {
    greeteng: greet,
    expression: expr,
    realAnswer: realAnsw,
  };
};

export default nod;
