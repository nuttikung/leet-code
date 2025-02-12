export const findWordsContaining = (words: string[], x: string): number[] => {
  return words.reduce((acc, cur, index) => {
    if (cur.includes(x)) {
      acc.push(index);
    }
    return acc;
  }, [] as number[]);
};
