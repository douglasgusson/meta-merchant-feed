export type Title = string;

export namespace Title {
  export type Model = Title;

  export function formatter(value: Model): string {
    if (value.length > 200) {
      throw new Error(`Title can't be longer than 200 characters`);
    }

    if (value.length > 65) {
      console.warn(`Title should be less than 65 characters`);
    }

    return value;
  }
}
