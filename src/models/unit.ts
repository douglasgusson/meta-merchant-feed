export const UNIT = {
  lb: "lb",
  oz: "oz",
  g: "g",
  kg: "kg",
} as const;

export type Unit = (typeof UNIT)[keyof typeof UNIT];

export namespace Unit {
  export type Model = Unit;

  export function formatter(value: Model): string {
    const validValues = Object.values(UNIT);

    if (!validValues.includes(value)) {
      throw new Error(
        `Invalid unit value: ${value}. Valid values: ${validValues}`,
      );
    }

    return value;
  }
}
