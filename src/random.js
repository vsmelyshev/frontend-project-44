export default function random(numberMin = 1, numberMax = 101) {
    const result = Math.round(Math.random() * (numberMax - numberMin) + numberMin);
    return result;
  };