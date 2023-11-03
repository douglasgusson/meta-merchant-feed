export type Price = {
  value: number;
  currency: string;
};

export namespace Price {
  export type Model = Price;

  export function formatter(price: Price.Model): string {
    if (price.value === undefined) {
      throw new Error("Price value is required");
    }

    if (price.value < 0) {
      throw new Error("Price value can't be negative");
    }

    if (price.currency.length !== 3) {
      throw new Error("Price currency must be 3 characters. Ex: USD, EUR, BRL");
    }

    return `${price.value.toFixed(2)} ${
      price.currency && price.currency.toUpperCase()
    }`;
  }
}
