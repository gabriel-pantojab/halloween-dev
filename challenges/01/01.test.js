const createMagicPotion = require("./01");

test("ddd", () => {
  const potions = [4, 5, 6, 2];
  const goal = 8;
  expect(createMagicPotion(potions, goal)).toEqual([2, 3]);
});

test("dd", () => {
  const potions = [1, 2, 3, 4];
  const goal = 9;
  expect(createMagicPotion(potions, goal)).toEqual(undefined);
});

test("d", () => {
  const potions = [1, 2, 3, 4];
  const goal = 5;
  expect(createMagicPotion(potions, goal)).toEqual([1, 2]);
});
