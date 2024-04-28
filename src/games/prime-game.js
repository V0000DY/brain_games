import runGame from '../index.js';
import getRandomInt from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const primeGame = () => {
  const number = getRandomInt(1, 99);
  const question = String(number);
  const answer = isPrime(number) ? 'yes' : 'no';

  return { question, answer };
};

export default () => runGame(rules, primeGame);
