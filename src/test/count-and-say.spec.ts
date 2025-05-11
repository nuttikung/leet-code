import { makeNextText, countAndSay } from "../count-and-say";

describe("makeNextText", () => {
  it("should return 1211 from 11", () => {
    const result = makeNextText("11");

    expect(result).toBe("1211");
  });

  it("should return 111221 from 1211", () => {
    const result = makeNextText("1211");

    expect(result).toBe("111221");
  });
});

describe("countAndSay", () => {
  it("should return 1 when n = 1", () => {
    const result = countAndSay(1);

    expect(result).toBe("1");
  });

  it("should return 11 when n = 2", () => {
    const result = countAndSay(2);

    expect(result).toBe("11");
  });

  it("should return 1211 when n = 4", () => {
    const result = countAndSay(1);

    expect(result).toBe("1211");
  });

  it("should return 13112221 when n = 7", () => {
    const result = countAndSay(1);

    expect(result).toBe("13112221");
  });
});
