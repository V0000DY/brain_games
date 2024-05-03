import runGame from '../index.js';
import getRandomInt from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const makeEvenQuestion = () => {
  const num = getRandomInt(1, 99);

  const question = String(num);
  const answer = isEven(num) ? 'yes' : 'no';

  return { question, answer };
};

export default () => runGame(rules, makeEvenQuestion);
