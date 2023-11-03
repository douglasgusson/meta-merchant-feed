import { AgeGroup } from "../src/models/age-group";

describe("AgeGroup", () => {
  describe("formatter", () => {
    it("returns 'newborn' for 'newborn'", () => {
      expect(AgeGroup.formatter("newborn")).toEqual("newborn");
    });

    it("returns 'infant' for 'infant'", () => {
      expect(AgeGroup.formatter("infant")).toEqual("infant");
    });

    it("returns 'toddler' for 'toddler'", () => {
      expect(AgeGroup.formatter("toddler")).toEqual("toddler");
    });

    it("returns 'kids' for 'kids'", () => {
      expect(AgeGroup.formatter("kids")).toEqual("kids");
    });

    it("returns 'adult' for 'adult'", () => {
      expect(AgeGroup.formatter("adult")).toEqual("adult");
    });

    it("returns 'teen' for 'teen'", () => {
      expect(AgeGroup.formatter("teen")).toEqual("teen");
    });

    it("returns 'all ages' for 'all ages'", () => {
      expect(AgeGroup.formatter("all ages")).toEqual("all ages");
    });

    it("throws an error for an invalid age group", () => {
      // @ts-ignore
      expect(() => AgeGroup.formatter("invalid")).toThrowError(
        'Invalid age group: "invalid". Must be one of: adult, all ages, teen, kids, toddler, infant, newborn.',
      );
    });
  });
});
