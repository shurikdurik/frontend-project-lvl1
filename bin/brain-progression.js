const progress = (elem, n) => {
  const arr = [];
  for (let i = 0; i < n; i += 1) {
    arr[i] = elem;
    elem += n;
  }
  return arr;
};

function check(arr1, arr2) {
  let num = 0;
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) {
      num = arr1[i];
    }
  }
  return num;
}

const progression = () => {
  const start = Math.round(Math.random() * 10);
  const index = 5 + Math.round(Math.random() * 5);
  const arr = progress(start, index);
  arr[Math.round(Math.random() * index)] = '..';
  const checking = progress(start, index);
  const greet = 'What number is missing in the progression?';
  const expr = arr.join(' ');
  const realAnsw = String(check(checking, arr));
  return {
    greeteng: greet,
    expression: expr,
    realAnswer: realAnsw,
  };
};

export default progression;
