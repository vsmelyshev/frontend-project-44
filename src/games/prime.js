import random from '../random.js';

const isPrime = (num) => {
  let result = true;
  let divisor = 2;
  while (result === true && divisor < num) {
    if (num % divisor === 0) result = false;
    divisor += 1;
  }
  return result;
};

export default () => {
  let answer;

  const question = random();
  if (isPrime(question)) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return [question, answer];
};
