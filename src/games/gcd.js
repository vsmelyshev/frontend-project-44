import random from '../random.js';

const gcd = (num1, num2) => {
  let result = Math.min(num1, num2);
  while (num1 % result !== 0 || num2 % result !== 0) {
    result -= 1;
  }
  return result;
};

export default () => {
  const firstNum = random();
  const secondNum = random();
  const question = `${firstNum} ${secondNum}`;
  const answer = gcd(firstNum, secondNum);
  return [question, answer];
};