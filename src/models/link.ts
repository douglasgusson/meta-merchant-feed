export type Link = string;

export namespace Link {
  export type Model = Link;

  export function formatter(value: Model): string {
    const urlRegex = new RegExp(
      "^https?://(?:www.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]+.[^s]{2,}|www.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]+.[^s]{2,}|https?://(?:www.|(?!www))[a-zA-Z0-9]+.[^s]{2,}|www.[a-zA-Z0-9]+.[^s]{2,}$",
    );

    if (!urlRegex.test(value)) {
      throw new Error(`Invalid link: "${value}"`);
    }

    return value;
  }
}
