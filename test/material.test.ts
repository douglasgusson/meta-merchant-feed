import { Material } from "../src/models/material";

describe("Material", () => {
  describe("formatter", () => {
    it("returns the input value if it has less than or equal to 200 characters", () => {
      const input = "This is a valid material";
      const expected = input;
      const actual = Material.formatter(input);
      expect(actual).toEqual(expected);
    });

    it("throws an error if the input value has more than 200 characters", () => {
      const input = "a".repeat(201);
      expect(() => Material.formatter(input)).toThrowError(
        "Material can't be longer than 200 characters",
      );
    });
  });
});
