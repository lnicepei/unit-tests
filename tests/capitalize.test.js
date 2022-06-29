import { capitalize } from "../functions";

test("cat to Cat", () => {
  expect(capitalize("cat")).toBe("Cat");
});

test("hello to Hello", () => {
  expect(capitalize("hello")).toBe("Hello");
});


