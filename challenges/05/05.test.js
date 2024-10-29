const escapePyramidHead = require("./05");

test("escapePyramidHead", () => {
  const room = [
    [".", ".", "#", ".", "▲"],
    ["#", ".", "#", ".", "#"],
    [".", ".", ".", ".", "."],
    ["#", "#", "#", ".", "#"],
    ["T", ".", ".", ".", "."],
  ];
  expect(escapePyramidHead(room)).toEqual(8);
});

test("escapePyramidHead", () => {
  const room2 = [
    ["T", ".", "#", "."],
    [".", ".", ".", "."],
    ["▲", ".", ".", "#"],
    [".", "#", "#", "#"],
  ];
  expect(escapePyramidHead(room2)).toEqual(2);
});

test("escapePyramidHead", () => {
  const room3 = [
    ["#", "#", "#"],
    ["▲", ".", "#"],
    [".", "#", "T"],
  ];
  expect(escapePyramidHead(room3)).toEqual(-1);
});
