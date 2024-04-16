import { getRandomInt } from '../index.js';

export const rules = 'Find the greatest common divisor of given numbers.';

const gsd = (x, y) => {
  if (y > x) return gsd(y, x);
  if (!y) return x;
  return gsd(y, x % y);
};

export const gcdGame = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const question = `${num1} ${num2}`;

  const answer = String(gsd(num1, num2));

  return { question, answer };
};
