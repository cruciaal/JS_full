// export const getSquaredArray = (arr) => arr.map((num) => num * num);

// export const getOddNumbers = (arr) => arr.filter((num) => num % 2 === 1);
// console.log(getOddNumbers([1, 2, 3]));

// export default (a, b) => a + b;

// export const getMinSquaredNumber = (arr) => {
//   if (!Array.isArray(arr) || arr.length === 0) {
//     return null;
//   }
//   const result = Math.min(...arr.map((el) => Math.abs(el)));
//   return result * result;
// };
/* eslint-disable default-case */

export const calc = (expression) => {
  if (typeof expression !== 'string') {
    return null;
  }

  const [a, operation, b] = expression.split(' ');
  let result;

  switch (operation) {
    case '+':
      result = +a + +b;
      break;
    case '-':
      result = +a - +b;
      break;
    case '*':
      result = +a * +b;
      break;
    case '/':
      result = +a / +b;
      break;
  }

  return `${expression} = ${result}`;
};
