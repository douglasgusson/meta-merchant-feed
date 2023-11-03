export type Integer = number;

export namespace Integer {
  export type Model = Integer;

  export function formatter(value: Model): string {
    if (typeof value !== "number") {
      throw new Error(`Invalid integer: "${value}". Must be a number.`);
    }

    if (!Number.isInteger(value)) {
      throw new Error(`Invalid integer: "${value}". Must be an integer.`);
    }

    return value.toString();
  }
}
