export type Description = string;

export namespace Description {
  export type Model = Description;

  export function formatter(value: Model): string {
    if (value.length > 9999) {
      throw new Error(`Description can't be longer than 9999 characters`);
    }

    return value;
  }
}
