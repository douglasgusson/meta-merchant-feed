export const STATUS = {
  active: "active",
  archived: "archived",
} as const;

export type Status = (typeof STATUS)[keyof typeof STATUS];

export namespace Status {
  export type Model = Status;

  export function formatter(value: Model): string {
    const validValues = Object.values(STATUS);

    if (!validValues.includes(value)) {
      throw new Error(
        `Invalid status: "${value}". Must be one of: ${validValues.join(
          ", ",
        )}.`,
      );
    }

    return value;
  }
}
