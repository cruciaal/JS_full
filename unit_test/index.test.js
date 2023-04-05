it('compare numbers', () => {
  expect(17).toEqual(17);
});
it('18 not 17', () => {
  expect(18).not.toEqual(17);
});
const getEvenNumbers = (numbers) => numbers.filter((num) => num % 2 === 0);
it('should get even numbers only', () => {
  const result = getEvenNumbers([1, 2, 3, 4]);
  expect(result).toEqual([2, 4]);
});
