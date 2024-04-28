import runGame from '../index.js';
import getRandomInt from '../utils.js';

const rules = 'What number is missing in the progression?';

const getProgression = (startProgressionNum, progressionLength, progressionStep) => {
  let num = startProgressionNum;
  const progression = [num];

  for (let i = 0; i < progressionLength; i += 1) {
    num += progressionStep;
    progression.push(num);
  }

  return progression;
};

const progressionGame = () => {
  const start = getRandomInt(1, 20);
  const length = getRandomInt(10, 15);
  const step = getRandomInt(1, 10);
  const hiddenNumIndex = getRandomInt(1, length);
  const progression = getProgression(start, length, step);
  const answer = String(progression[hiddenNumIndex]);
  progression[hiddenNumIndex] = '..';
  const question = progression.join(' ');

  return { question, answer };
};

export default () => runGame(rules, progressionGame);
