import runGame from '../index.js';
import getRandomInt from '../utils.js';

const rules = 'What is the result of the expression?';

const evalExpression = (expressionArr) => {
  const [number1, operator, number2] = expressionArr;
  let result = 0;

  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      throw new Error(`Unknown operator type: ${operator}`);
  }

  return result;
};

const calcGame = () => {
  const num1 = getRandomInt(1, 99);
  const num2 = getRandomInt(1, 99);
  const operations = ['+', '-', '*'];
  const operationIndex = getRandomInt(0, 2);
  const expression = [num1, operations[operationIndex], num2];
  const question = expression.join(' ');
  const answer = String(evalExpression(expression));

  return { question, answer };
};

export default () => runGame(rules, calcGame);
