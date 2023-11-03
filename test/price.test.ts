import { Price } from "../src/models/price";

describe("Price", () => {
  describe("formatter", () => {
    it("throws an error if price value is undefined", () => {
      const price = { currency: "usd" };
      // @ts-ignore - because we are testing an error
      expect(() => Price.formatter(price)).toThrow("Price value is required");
    });

    it("throws an error if price value is negative", () => {
      const price = { value: -10.99, currency: "usd" };
      expect(() => Price.formatter(price)).toThrow(
        "Price value can't be negative",
      );
    });

    it("throws an error if price currency is undefined", () => {
      const price = { value: 10.99, currency: "C" };
      expect(() => Price.formatter(price)).toThrow(
        "Price currency must be 3 characters. Ex: USD, EUR, BRL",
      );
    });

    it("formats price with currency in uppercase", () => {
      const price = { value: 10.99, currency: "eur" };
      const formattedPrice = Price.formatter(price);
      expect(formattedPrice).toEqual("10.99 EUR");
    });

    it("formats price with 2 decimal places", () => {
      const price = { value: 10.9, currency: "usd" };
      const formattedPrice = Price.formatter(price);
      expect(formattedPrice).toEqual("10.90 USD");
    });

    it("formats price with 3 decimal places", () => {
      const price = { value: 10.999, currency: "usd" };
      const formattedPrice = Price.formatter(price);
      expect(formattedPrice).toEqual("11.00 USD");
    });
  });
});
