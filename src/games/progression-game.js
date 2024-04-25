import runGame from '../index.js';
import getRandomInt from '../utils.js';

export const rules = 'What number is missing in the progression?';

const getProgressionArr = (startProgressionNum, progressionLength, progressionStep) => {
  let num = startProgressionNum;
  const progression = [num];

  for (let i = 0; i < progressionLength; i += 1) {
    num += progressionStep;
    progression.push(num);
  }

  return progression;
};

export const progressionGame = () => {
  const startProgNum = getRandomInt(1, 20);
  const progLength = getRandomInt(10, 15);
  const progStep = getRandomInt(1, 10);
  const hiddenNumIndex = getRandomInt(1, progLength);
  const progArr = getProgressionArr(startProgNum, progLength, progStep);
  const answer = String(progArr[hiddenNumIndex]);
  progArr[hiddenNumIndex] = '..';
  const question = progArr.join(' ');

  return { question, answer };
};

export default () => runGame(rules, progressionGame);
