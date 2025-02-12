import { truncateSentence } from "./truncateSentence";

describe("truncateSentence", () => {
  const sentence = "who is there knock knock ghost is coming";
  it("should return who is there when k = 3", () => {
    const result = truncateSentence(sentence, 3);
    expect(result).toBe("who is there");
  });

  it("should return who is there when knock k = 3", () => {
    const result = truncateSentence(sentence, 4);
    expect(result).toBe("who is there knock");
  });
});
