const findSafestPath = require('./03');

test('03 test 1', () => {
  const dream = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
  ];
  expect(findSafestPath(dream)).toBe(7);
});