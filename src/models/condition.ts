export const CONDITION = {
  new: "new",
  refurbished: "refurbished",
  used: "used",
} as const;

export type Condition = (typeof CONDITION)[keyof typeof CONDITION];

export namespace Condition {
  export type Model = Condition;

  export function formatter(value: Model): string {
    const isValidCondition = (value: string): value is Model => {
      return value in CONDITION;
    };

    if (!isValidCondition(value)) {
      throw new Error(
        `Invalid condition: "${value}". Valid values are: ${Object.keys(
          CONDITION,
        ).join(", ")}`,
      );
    }

    return value;
  }
}
