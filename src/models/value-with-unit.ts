import { Unit } from "./unit";

export type ValueWithUnit = {
  value: number;
  unit: Unit;
};

export namespace ValueWithUnit {
  export type Model = ValueWithUnit;

  export function formatter(valueWithUnit: Model): string {
    return `${valueWithUnit.value} ${Unit.formatter(valueWithUnit.unit)}`;
  }
}
