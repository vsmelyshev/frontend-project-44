import random from '../random.js';

export default () => {
  const minNumber = 1;
  const maxNumber = 10;

  const firstNum = random(minNumber, maxNumber);
  const secondNum = random(minNumber, maxNumber);
  const operation = random(1, 3);

  let question = firstNum;
  let answer;

  switch (operation) {
    case 1:
      question += ' + ';
      answer = firstNum + secondNum;
      break;

    case 2:
      question += ' - ';
      answer = firstNum - secondNum;
      break;

    case 3:
      question += ' * ';
      answer = firstNum * secondNum;
      break;

    default:
  }

  question += secondNum;
  return [question, answer];
};