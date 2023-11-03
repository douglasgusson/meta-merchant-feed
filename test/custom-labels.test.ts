import { CustomLabels } from "../src/models/custom-labels";

describe("CustomLabels", () => {
  describe("formatter", () => {
    it("should format the custom labels correctly", () => {
      const value = ["label1", "label2", "label3"];
      const root = {};
      CustomLabels.formatter(value, {}, root);
      expect(root).toEqual({
        custom_label_1: "label1",
        custom_label_2: "label2",
        custom_label_3: "label3",
      });
    });
  });
});
