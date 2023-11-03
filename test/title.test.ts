import { Title } from "../src/models/title";

describe("Title", () => {
  describe("formatter", () => {
    it("returns the value if it's less than or equal to 65 characters", () => {
      const value = "This is a short title";
      const result = Title.formatter(value);
      expect(result).toEqual(value);
    });

    it("logs a warning if the value is longer than 65 characters", () => {
      const value =
        "This is a very long title that exceeds the maximum length of 65 characters";
      const spy = jest.spyOn(console, "warn").mockImplementation(() => {});
      const result = Title.formatter(value);
      expect(result).toEqual(value);
      expect(spy).toHaveBeenCalledWith(
        "Title should be less than 65 characters",
      );
      spy.mockRestore();
    });

    it("throws an error if the value is longer than 200 characters", () => {
      const value =
        "This is a very long title that exceeds the maximum length of 200 characters. This is a very long title that exceeds the maximum length of 200 characters. This is a very long title that exceeds the maximum length of 200 characters. This is a very long title that exceeds the maximum length of 200 characters. This is a very long title that exceeds the maximum length of 200 characters. This is a very long title that exceeds the maximum length of 200 characters.";
      expect(() => Title.formatter(value)).toThrowError(
        "Title can't be longer than 200 characters",
      );
    });
  });
});
