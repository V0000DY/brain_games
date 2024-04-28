import runGame from '../index.js';
import getRandomInt from '../utils.js';

const rules = 'What is the result of the expression?';

const evalExpression = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operation type: ${operation}`);
  }
};

const calcGame = () => {
  const operations = ['+', '-', '*'];
  const lastOperationIndex = operations.length - 1;

  const num1 = getRandomInt(1, 99);
  const num2 = getRandomInt(1, 99);
  const operationIndex = getRandomInt(0, lastOperationIndex);
  const operation = operations[operationIndex];
  const question = `${num1} ${operation} ${num2}`;
  const answer = String(evalExpression(num1, num2, operation));

  return { question, answer };
};

export default () => runGame(rules, calcGame);
