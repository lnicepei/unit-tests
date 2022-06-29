import { analyzeArray } from "../functions";

test("analyze [1]", () => {
  expect(analyzeArray([1])).toStrictEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 1,
  });
});

test("analyze [1, 2, 3, 4, 5]", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toStrictEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});

test("analyze [1, 2, 3]", () => {
  expect(analyzeArray([1, 2, 3])).toStrictEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 3,
  });
});

test("analyze [12, 4, 5, 8]", () => {
  expect(analyzeArray([12, 4, 5, 8])).toStrictEqual({
    average: 7,
    min: 4,
    max: 12,
    length: 4,
  });
});

test("analyze [1,8,3,4,2,6]", () => {
  expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});
