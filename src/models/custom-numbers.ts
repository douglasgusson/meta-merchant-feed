import { Integer } from "./integer";

export type CustomNumbers = number[];

const meta = {
  propName: "custom_number",
  limit: 5,
};

export namespace CustomNumbers {
  export type Model = CustomNumbers;

  export function formatter(
    value: Model,
    _map: unknown,
    root: Record<string, string>,
  ) {
    value.slice(0, meta.limit).forEach((item, index) => {
      root[`${meta.propName}_${index + 1}`] = Integer.formatter(item);
    });
  }
}
