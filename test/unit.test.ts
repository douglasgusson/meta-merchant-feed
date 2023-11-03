import { Unit } from "../src/models/unit";

describe("Unit", () => {
  describe("formatter", () => {
    it("returns the value if it is a valid unit", () => {
      const validUnit = "kg";
      const result = Unit.formatter(validUnit);
      expect(result).toEqual(validUnit);
    });

    it("throws an error if the value is not a valid unit", () => {
      const invalidUnit = "invalid";
      // @ts-ignore - because we are testing an error
      expect(() => Unit.formatter(invalidUnit)).toThrowError(
        `Invalid unit value: ${invalidUnit}. Valid values: lb,oz,g,kg`,
      );
    });
  });
});
