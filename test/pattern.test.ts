import { Pattern } from "../src/models/pattern";

describe("Pattern", () => {
  describe("formatter", () => {
    it("returns the input value if it has less than or equal to 100 characters", () => {
      const input = "This is a valid pattern";
      const expected = input;
      const actual = Pattern.formatter(input);
      expect(actual).toEqual(expected);
    });

    it("throws an error if the input value has more than 100 characters", () => {
      const input = "a".repeat(101);
      expect(() => Pattern.formatter(input)).toThrowError(
        "Pattern can't be longer than 100 characters",
      );
    });
  });
});
