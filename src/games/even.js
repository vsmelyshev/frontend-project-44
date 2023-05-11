import random from '../random.js';

const isEven = (number) => number % 2 === 0;

export default () => {
  const question = random();
  let answer;

  if (isEven(question)) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return [question, answer];
};