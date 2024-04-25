import runGame from '../index.js';
import getRandomInt from '../utils.js';

export const rules = 'Find the greatest common divisor of given numbers.';

const gsd = (number1, number2) => {
  if (number2 > number1) return gsd(number2, number1);
  if (!number2) return number1;
  return gsd(number2, number1 % number2);
};

export const gcdGame = () => {
  const num1 = getRandomInt(1, 99);
  const num2 = getRandomInt(1, 99);
  const question = `${num1} ${num2}`;

  const answer = String(gsd(num1, num2));

  return { question, answer };
};

export default () => runGame(rules, gcdGame);
