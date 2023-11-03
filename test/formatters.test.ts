import { xmlObjectFormatter } from "../src/formatters";

describe("xmlObjectFormatter", () => {
  it("should return an empty object when contents and map are empty", () => {
    const contents = {};
    const map = {};
    const expected = {};
    const result = xmlObjectFormatter(contents, map);
    expect(result).toEqual(expected);
  });

  it("should return an object with a single property when contents has one property and map has one matching property", () => {
    const contents = { foo: "bar" };
    const map = { foo: { xmlName: "baz" } };
    const expected = { baz: "bar" };
    const result = xmlObjectFormatter(contents, map);
    expect(result).toEqual(expected);
  });

  it("should return an object with a single property when contents has one property and map has one matching property with allowRepeat=true", () => {
    const contents = { foo: ["bar"] };
    const map = { foo: { xmlName: "baz", allowRepeat: true } };
    const expected = { baz: ["bar"] };
    const result = xmlObjectFormatter(contents, map);
    expect(result).toEqual(expected);
  });

  it("should return an object with multiple properties when contents has multiple properties and map has multiple matching properties", () => {
    const contents = { foo: "bar", baz: "qux" };
    const map = { foo: { xmlName: "bar" }, baz: { xmlName: "qux" } };
    const expected = { bar: "bar", qux: "qux" };
    const result = xmlObjectFormatter(contents, map);
    expect(result).toEqual(expected);
  });

  it("should return an object with multiple properties when contents has multiple properties and map has multiple matching properties with allowRepeat=true", () => {
    const contents = { foo: ["bar", "baz"], qux: "quux" };
    const map = {
      foo: { xmlName: "bar", allowRepeat: true },
      qux: { xmlName: "corge" },
    };
    const expected = { bar: ["bar", "baz"], corge: "quux" };
    const result = xmlObjectFormatter(contents, map);
    expect(result).toEqual(expected);
  });

  it("should ignore properties in contents that do not have a matching property in map", () => {
    const contents = { foo: "bar", baz: "qux" };
    const map = { foo: { xmlName: "bar" } };
    const expected = { bar: "bar" };
    const result = xmlObjectFormatter(contents, map);
    expect(result).toEqual(expected);
  });

  it("should ignore properties in map that do not have a matching property in contents", () => {
    const contents = { foo: "bar" };
    const map = { foo: { xmlName: "bar" }, baz: { xmlName: "qux" } };
    const expected = { bar: "bar" };
    const result = xmlObjectFormatter(contents, map);
    expect(result).toEqual(expected);
  });
});
