export type CustomLabels = string[];

const meta = {
  propName: "custom_label",
  limit: 5,
};

export namespace CustomLabels {
  export type Model = CustomLabels;

  export function formatter(
    value: Model,
    _map: unknown,
    root: Record<string, string>,
  ) {
    value.slice(0, meta.limit).forEach((item, index) => {
      root[`${meta.propName}_${index + 1}`] = item;
    });
  }
}
