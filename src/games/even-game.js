import { getRandomInt } from '../index.js';

export const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

export const evenGame = () => {
  const num1 = getRandomInt(1, 100);

  const question = `${num1}`;
  const answer = num1 % 2 === 0 ? 'yes' : 'no';

  return { question, answer };
};
