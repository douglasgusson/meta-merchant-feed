export type Color = string;

export namespace Color {
  export type Model = Color;

  export function formatter(value: Model): string {
    if (value.length > 200) {
      throw new Error(`Color can't be longer than 200 characters`);
    }

    return value;
  }
}
