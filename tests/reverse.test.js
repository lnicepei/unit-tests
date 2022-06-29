import { reverseString } from "../functions";

test("cat to Cat", () => {
  expect(reverseString("cat")).toBe("tac");
});

test("hello to Hello", () => {
  expect(reverseString("hello")).toBe("olleh");
});