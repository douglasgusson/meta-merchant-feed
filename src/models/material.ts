export type Material = string;

export namespace Material {
  export type Model = Material;

  export function formatter(value: Model): string {
    if (value.length > 200) {
      throw new Error(`Material can't be longer than 200 characters`);
    }

    return value;
  }
}
