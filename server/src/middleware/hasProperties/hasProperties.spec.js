const hasProperties = require("./hasProperties");

describe("hasProperties()", () => {
  describe("input argument is missing", () => {
    test("should return undefined", () => {
      const result = hasProperties();
      expect(result).toBeUndefined();
    });
  });
  describe("input argument is not an array", () => {
    describe('input type is type of "object"', () => {
      test("should return undefined", () => {
        const result = hasProperties({
          username: "username",
          password: "password",
        });
        expect(result).toBeUndefined();
      });
    });
    describe('input type is type of "string"', () => {
      test("should return undefined", () => {
        const result = hasProperties("string");
        expect(result).toBeUndefined();
      });
    });
    describe('input type is type of "number"', () => {
      test("should return undefined", () => {
        const result = hasProperties(0);
        expect(result).toBeUndefined();
      });
    });
    describe('input type is type of "boolean"', () => {
      test("should return undefined", () => {
        const result = hasProperties(false);
        expect(result).toBeUndefined();
      });
    });
  });
});
