import runGame from '../index.js';
import getRandomInt from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getGсd = (num1, num2) => {
  if (num2 > num1) return getGсd(num2, num1);
  if (!num2) return num1;
  return getGсd(num2, num1 % num2);
};

const makeGcdQuestion = () => {
  const num1 = getRandomInt(1, 99);
  const num2 = getRandomInt(1, 99);
  const question = `${num1} ${num2}`;

  const answer = String(getGсd(num1, num2));

  return { question, answer };
};

export default () => runGame(rules, makeGcdQuestion);
