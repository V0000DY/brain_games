import { getRandomInt } from '../index.js';

export const rules = 'What number is missing in the progression?';

const getProgressionArr = (startNum, length, step) => {
  let num = startNum;
  const progression = [num];

  for (let i = 0; i < length; i += 1) {
    num += step;
    progression.push(num);
  }

  return progression;
};

export const progressionGame = () => {
  const startnum = getRandomInt(1, 20);
  const lengtH = getRandomInt(10, 15);
  const steP = getRandomInt(1, 10);
  const missNumIndex = getRandomInt(1, lengtH);
  const order = getProgressionArr(startnum, lengtH, steP);
  const answer = String(order[missNumIndex]);
  order[missNumIndex] = '..';
  const question = order.join(' ');

  return { question, answer };
};
