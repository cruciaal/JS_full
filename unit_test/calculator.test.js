// it('compare numbers', () => {
//   expect(17).toEqual(17);
// });
// it('18 not 17', () => {
//   expect(18).not.toEqual(17);
// });
// const getEvenNumbers = (numbers) => numbers.filter((num) => num % 2 === 0);
// it('should get even numbers only', () => {
//   const result = getEvenNumbers([1, 2, 3, 4]);
//   expect(result).toEqual([2, 4]);
// });
import getSum, { getSquaredArray, getOddNumbers } from './calculator';

it('should get squared numbers', () => {
  const result = getSquaredArray([1, 2, 3]);
  expect(result).toEqual([1, 4, 9]);
});

// it('should return only odd numbers', () => {
//   const result = getOddNumbers([2, 3, 6, 5]);
//   expect(result).toEqual([3, 5]);
// });

// it('should return only odd numbers', () => {
//   const result = getOddNumbers([1, 2, 3]);
//   expect(result).toEqual([1, 3]);
// });

it('should return only odd numbers', () => {
  const result = getOddNumbers([1, 2, 3]);
  expect(result).toEqual([1, 3]);
});

it('should get sum of numbers', () => {
  const result = getSum(6, 4);
  expect(result).toEqual(10);
});
