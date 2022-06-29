import { calculator } from "../functions.js";

test("add 2 + 2", () => {
  expect(calculator(2, 2, "+")).toBe(4);
});

test("multiply 2 * 4", () => {
  expect(calculator(2, 4, "*")).toBe(8);
});

test("subtract 2 - 123", () => {
  expect(calculator(2, 123, "-")).toBe(-121);
});

test("divide 128 / 4", () => {
  expect(calculator(128, 4, "/")).toBe(32);
});

test("divide 3 / 2", () => {
  expect(calculator(3, 2, "/")).toBe(1.5);
});

test("divide 2 / 3", () => {
  expect(calculator(2, 3, "/")).toBe(0.67);
});
