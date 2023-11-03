import { Availability } from "../src/models/availability";

describe("Availability", () => {
  describe("formatter", () => {
    it("returns 'in stock' for 'in stock'", () => {
      const result = Availability.formatter("in stock");
      expect(result).toEqual("in stock");
    });

    it("returns 'out of stock' for 'out of stock'", () => {
      const result = Availability.formatter("out of stock");
      expect(result).toEqual("out of stock");
    });

    it("throws an error for an invalid availability", () => {
      // @ts-ignore
      expect(() => Availability.formatter("invalid")).toThrowError(
        'Invalid availability: "invalid". Must be one of: in stock, out of stock.',
      );
    });
  });
});
