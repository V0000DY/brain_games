import { getRandomInt } from '../index.js';

export const rules = 'What is the result of the expression?';

export const calcGame = () => {
  const num1 = getRandomInt(100);
  const num2 = getRandomInt(100);
  const num3 = getRandomInt(3);
  let question = '';
  let answer = '';

  switch (num3) {
    case 0:
      question = `${num1} + ${num2}`;
      answer = String(num1 + num2);
      break;
    case 1:
      question = `${num1} - ${num2}`;
      answer = String(num1 - num2);
      break;
    default:
      question = `${num1} * ${num2}`;
      answer = String(num1 * num2);
  }

  return { question, answer };
};
