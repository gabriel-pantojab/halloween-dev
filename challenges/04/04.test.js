const findTheKiller = require("./04");

test("04", () => {
  const whisper = "d~~~~~a";
  const suspects = [
    "Dracula",
    "Freddy Krueger",
    "Jason Voorhees",
    "Michael Myers",
  ];
  expect(findTheKiller(whisper, suspects)).toBe("Dracula");
});

test("04", () => {
  const whisper = "~r~dd~";
  const suspects = ["Freddy", "Freddier", "Fredderic"];
  expect(findTheKiller(whisper, suspects)).toBe("Freddy,Freddier,Fredderic");
});

test("04", () => {
  const whisper = "~r~dd$";
  const suspects = ["Freddy", "Freddier", "Fredderic"];
  expect(findTheKiller(whisper, suspects)).toBe("");
});

test("04", () => {
  const whisper = "mi~~def";
  const suspects = ["Midudev", "Midu", "Madeval"];
  expect(findTheKiller(whisper, suspects)).toBe("");
});
