export const AGE_GROUP = {
  adult: "adult",
  allAges: "all ages",
  teen: "teen",
  kids: "kids",
  toddler: "toddler",
  infant: "infant",
  newborn: "newborn",
} as const;

export type AgeGroup = (typeof AGE_GROUP)[keyof typeof AGE_GROUP];

export namespace AgeGroup {
  export type Model = AgeGroup;

  export function formatter(value: Model): string {
    const validValues = Object.values(AGE_GROUP);

    if (!validValues.includes(value)) {
      throw new Error(
        `Invalid age group: "${value}". Must be one of: ${validValues.join(
          ", ",
        )}.`,
      );
    }

    return value;
  }
}
