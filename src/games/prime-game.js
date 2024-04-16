import { getRandomInt } from '../index.js';

export const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return 'no';
  }

  return num > 1 ? 'yes' : 'no';
};

export const primeGame = () => {
  const number = getRandomInt(1, 100);
  const answer = isPrime(number);
  const question = String(number);

  return { question, answer };
};
