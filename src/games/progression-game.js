import runGame from '../index.js';
import getRandomInt from '../utils.js';

const rules = 'What number is missing in the progression?';

const getProgression = (start, length, step) => {
  let num = start;
  const progression = [num];

  for (let i = 1; i < length; i += 1) {
    num += step;
    progression.push(num);
  }

  return progression;
};

const getRandomIndex = (progression) => getRandomInt(0, progression.length - 1);

const makeProgressionQuestion = () => {
  const start = getRandomInt(1, 20);
  const length = getRandomInt(10, 15);
  const step = getRandomInt(1, 10);
  const progression = getProgression(start, length, step);
  const hiddenNumIndex = getRandomIndex(progression);
  const answer = String(progression[hiddenNumIndex]);
  progression[hiddenNumIndex] = '..';
  const question = progression.join(' ');

  return { question, answer };
};

export default () => runGame(rules, makeProgressionQuestion);
