import random from '../random.js';

const getProgression = (firstNum, length, inc) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(firstNum + i * inc);
  }
  return result;
};

const arrayToString = (arr) => {
  let result = '';
  for (let i = 0; i < arr.length; i += 1) {
    result += `${arr[i]} `;
  }
  return result;
};

export default () => {
  const maxFirtsNum = 10;
  const minLength = 5;
  const maxLength = 10;
  const maxInc = 10;

  const firstNum = random(1, maxFirtsNum);
  const length = random(minLength, maxLength);
  const inc = random(1, maxInc);
  const missingPos = random(1, length);
  const progression = getProgression(firstNum, length, inc);

  const answer = progression[missingPos - 1];
  progression[missingPos - 1] = '..';
  const question = arrayToString(progression);
  return [question, answer];
};
