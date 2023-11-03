export const AVAILABILITY = {
  in_stock: "in stock",
  out_of_stock: "out of stock",
} as const;

export type Availability = (typeof AVAILABILITY)[keyof typeof AVAILABILITY];

export namespace Availability {
  export type Model = Availability;

  export function formatter(value: Model): string {
    const validValues = Object.values(AVAILABILITY);

    if (!validValues.includes(value)) {
      throw new Error(
        `Invalid availability: "${value}". Must be one of: ${validValues.join(
          ", ",
        )}.`,
      );
    }

    return value;
  }
}
