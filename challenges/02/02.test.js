const battleHorde = require("./02");

test("test 1", () => {
  const zombies = "242";
  const humans = "334";
  expect(battleHorde(zombies, humans)).toEqual("2h");
});

test("test 2", () => {
  const zombies = "444";
  const humans = "282";
  expect(battleHorde(zombies, humans)).toEqual("x");
});
