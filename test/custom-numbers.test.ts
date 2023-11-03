import { CustomNumbers } from "../src/models/custom-numbers";

describe("CustomNumbers", () => {
  describe("formatter", () => {
    it("formats the given value correctly", () => {
      const value = [1, 2, 3];
      const root = {};
      CustomNumbers.formatter(value, {}, root);
      expect(root).toEqual({
        custom_number_1: "1",
        custom_number_2: "2",
        custom_number_3: "3",
      });
    });
  });
});
