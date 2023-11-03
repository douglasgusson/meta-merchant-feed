import { Condition } from "../src/models/condition";

describe("Condition", () => {
  describe("formatter", () => {
    it("returns the input value if it is a valid condition", () => {
      const validCondition = "new";
      expect(Condition.formatter(validCondition)).toEqual(validCondition);
    });

    it("throws an error if the input value is not a valid condition", () => {
      const invalidCondition = "invalid";
      // @ts-ignore - intentionally passing an invalid value to test the error
      expect(() => Condition.formatter(invalidCondition)).toThrowError(
        `Invalid condition: "${invalidCondition}". Valid values are: new, refurbished, used`,
      );
    });
  });
});
