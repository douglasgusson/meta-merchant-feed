import { RichTextDescription } from "../src/models/rich-text-description";

describe("RichTextDescription", () => {
  describe("formatter", () => {
    it("returns CDATA wrapped value", () => {
      const input = "This is a test";
      const expected = `<![CDATA[${input}]]>`;
      const actual = RichTextDescription.formatter(input);
      expect(actual).toEqual(expected);
    });

    it("throws an error if value is longer than 9999 characters", () => {
      const input = "a".repeat(10000);
      expect(() => RichTextDescription.formatter(input)).toThrowError(
        `Rich text description can't be longer than 9999 characters`,
      );
    });
  });
});
