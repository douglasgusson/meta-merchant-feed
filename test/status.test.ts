import { Status } from "../src/models/status";

describe("Status", () => {
  describe("formatter", () => {
    it("returns the value if it is a valid status", () => {
      const validStatus = "active";
      const result = Status.formatter(validStatus);
      expect(result).toEqual(validStatus);
    });

    it("throws an error if the value is not a valid status", () => {
      const invalidStatus = "INVALID";
      // @ts-ignore
      expect(() => Status.formatter(invalidStatus)).toThrowError(
        `Invalid status: "${invalidStatus}". Must be one of: active, archived.`,
      );
    });
  });
});
