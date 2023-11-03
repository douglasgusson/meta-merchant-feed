import { Description } from "../src/models/description";

describe("Description", () => {
  describe("formatter", () => {
    it("returns the input value if it has less than or equal to 9999 characters", () => {
      const input = "This is a short description.";
      const expected = input;
      const actual = Description.formatter(input);
      expect(actual).toEqual(expected);
    });

    it("throws an error if the input value has more than 9999 characters", () => {
      const input = "a".repeat(10000);
      expect(() => Description.formatter(input)).toThrowError(
        "Description can't be longer than 9999 characters",
      );
    });
  });
});
