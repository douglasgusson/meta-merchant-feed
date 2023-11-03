import { Integer } from "../src/models/integer";

describe("Integer", () => {
  describe("formatter", () => {
    it("should return a string representation of an integer", () => {
      const value = 42;
      const expected = "42";
      const actual = Integer.formatter(value);
      expect(actual).toEqual(expected);
    });

    it("should throw an error if the value is not a number", () => {
      const value = "not a number";
      // @ts-ignore - intentionally passing an invalid value to test the error
      expect(() => Integer.formatter(value)).toThrow(
        'Invalid integer: "not a number". Must be a number.',
      );
    });

    it("should throw an error if the value is not an integer", () => {
      const value = 3.14;
      expect(() => Integer.formatter(value)).toThrow(
        'Invalid integer: "3.14". Must be an integer.',
      );
    });
  });
});
