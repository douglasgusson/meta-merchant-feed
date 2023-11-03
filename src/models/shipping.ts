import { Price } from "./price";

export type Shipping = {
  country: string;
  region?: string;
  service?: string;
  price?: Price;
};

export namespace Shipping {
  export type Model = Shipping;

  export function formatter(value: Model | Model[]): string {
    if (Array.isArray(value)) {
      const shipping = value.map(Shipping.formatItem);
      return shipping.join(",");
    }

    return Shipping.formatItem(value);
  }

  export function formatItem(item: Model): string {
    const { country, region, service, price } = item;

    if (!country) {
      throw new Error("Shipping country is required");
    }

    return `${country}:${region}:${service}:${Price.formatter(price)}`;
  }
}
