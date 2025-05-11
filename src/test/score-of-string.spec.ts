import { scoreOfString } from "../score-of-string";

type TTestInput = {
  s: string;
  total: number;
};

describe("scoreOfString", () => {
  it.each<TTestInput>([
    { s: "hello", total: 13 },
    { s: "zaz", total: 50 },
  ])("should return sum score from text", ({ s, total }) => {
    const result = scoreOfString(s);

    expect(result).toBe(total);
  });
});
