import { ValueWithUnit } from "../src/models/value-with-unit";

describe("ValueWithUnit", () => {
  describe("formatter", () => {
    it("should format value with unit", () => {
      const valueWithUnit = { value: 10, unit: "kg" } satisfies ValueWithUnit;
      const expected = "10 kg";
      const actual = ValueWithUnit.formatter(valueWithUnit);
      expect(actual).toEqual(expected);
    });
  });
});
