export type RichTextDescription = string;

export namespace RichTextDescription {
  export type Model = RichTextDescription;

  export function formatter(value: Model): string {
    if (value.length > 9999) {
      throw new Error(
        `Rich text description can't be longer than 9999 characters`,
      );
    }

    return `<![CDATA[${value}]]>`;
  }
}
