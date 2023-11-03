import { Gender } from "../src/models/gender";

describe("Gender", () => {
  describe("formatter", () => {
    it("returns the same value when a valid gender is passed", () => {
      const validGender = "male";
      const result = Gender.formatter(validGender);
      expect(result).toEqual(validGender);
    });

    it("throws an error when an invalid gender is passed", () => {
      const invalidGender = "INVALID";
      // @ts-ignore - We're testing that the error is thrown
      expect(() => Gender.formatter(invalidGender)).toThrowError(
        `Invalid gender: "${invalidGender}". Must be one of: male, female, unisex.`,
      );
    });
  });
});
