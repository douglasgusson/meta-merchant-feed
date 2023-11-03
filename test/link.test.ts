import { Link } from "../src/models";

describe("Link", () => {
  describe("formatter", () => {
    it("returns the input value if it is a valid URL", () => {
      const validUrl = "https://www.example.com";
      expect(Link.formatter(validUrl)).toEqual(validUrl);
    });

    it("throws an error if the input value is not a valid URL", () => {
      const invalidUrl = "not a valid URL";
      expect(() => Link.formatter(invalidUrl)).toThrowError(
        `Invalid link: "${invalidUrl}"`,
      );
    });
  });
});
