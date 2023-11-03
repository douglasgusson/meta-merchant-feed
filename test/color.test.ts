import { Color } from "../src/models/color";

describe("Color", () => {
  describe("formatter", () => {
    it("returns the input value if it's shorter than 200 characters", () => {
      const input = "red";
      const output = Color.formatter(input);
      expect(output).toEqual(input);
    });

    it("throws an error if the input value is longer than 200 characters", () => {
      const input = "a".repeat(201);
      expect(() => Color.formatter(input)).toThrowError(
        "Color can't be longer than 200 characters",
      );
    });
  });
});
