export type Pattern = string;

export namespace Pattern {
  export type Model = Pattern;

  export function formatter(value: Model): string {
    if (value.length > 100) {
      throw new Error(`Pattern can't be longer than 100 characters`);
    }

    return value;
  }
}
