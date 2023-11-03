import { Shipping } from "../src/models/shipping";

describe("Shipping", () => {
  describe("formatter", () => {
    it("throws an error if country is undefined", () => {
      const shipping = [
        {
          region: "North",
          service: "Standard",
          price: { value: 10.99, currency: "USD" },
        },
      ];
      // @ts-ignore - because we are testing an error
      expect(() => Shipping.formatter(shipping)).toThrow(
        "Shipping country is required",
      );
    });

    it("formats shipping with one item in array", () => {
      const shipping = [
        {
          country: "US",
          region: "North",
          service: "Standard",
          price: { value: 10.99, currency: "USD" },
        },
      ];
      const formattedShipping = Shipping.formatter(shipping);
      expect(formattedShipping).toEqual("US:North:Standard:10.99 USD");
    });

    it("formats shipping with one item", () => {
      const shipping = {
        country: "US",
        region: "North",
        service: "Standard",
        price: { value: 10.99, currency: "USD" },
      };
      const formattedShipping = Shipping.formatter(shipping);
      expect(formattedShipping).toEqual("US:North:Standard:10.99 USD");
    });

    it("formats shipping with multiple items", () => {
      const shipping = [
        {
          country: "US",
          region: "North",
          service: "Standard",
          price: { value: 10.99, currency: "USD" },
        },
        {
          country: "CA",
          region: "East",
          service: "Express",
          price: { value: 20.99, currency: "CAD" },
        },
      ];
      const formattedShipping = Shipping.formatter(shipping);
      expect(formattedShipping).toEqual(
        "US:North:Standard:10.99 USD,CA:East:Express:20.99 CAD",
      );
    });

    it("formats shipping with price in EUR", () => {
      const shipping = [
        {
          country: "DE",
          region: "North",
          service: "Standard",
          price: { value: 9.99, currency: "EUR" },
        },
      ];
      const formattedShipping = Shipping.formatter(shipping);
      expect(formattedShipping).toEqual("DE:North:Standard:9.99 EUR");
    });
  });

  describe("formatItem", () => {
    it("throws an error if country is undefined", () => {
      const shipping = {
        region: "North",
        service: "Standard",
        price: { value: 10.99, currency: "USD" },
      };
      // @ts-ignore - because we are testing an error
      expect(() => Shipping.formatItem(shipping)).toThrow(
        "Shipping country is required",
      );
    });

    it("formats shipping item with price in GBP", () => {
      const shipping = {
        country: "GB",
        region: "North",
        service: "Standard",
        price: { value: 7.99, currency: "GBP" },
      };
      const formattedShipping = Shipping.formatItem(shipping);
      expect(formattedShipping).toEqual("GB:North:Standard:7.99 GBP");
    });
  });
});
