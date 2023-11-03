export const GENDER = {
  male: "male",
  female: "female",
  unisex: "unisex",
} as const;

export type Gender = (typeof GENDER)[keyof typeof GENDER];

export namespace Gender {
  export type Model = Gender;

  export function formatter(value: Model): string {
    const validValues = Object.values(GENDER);

    if (!validValues.includes(value)) {
      throw new Error(
        `Invalid gender: "${value}". Must be one of: ${validValues.join(
          ", ",
        )}.`,
      );
    }

    return value;
  }
}
