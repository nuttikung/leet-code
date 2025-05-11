function scoreOfString(s: string): number {
  let sum: number = 0;

  for (let i = 0; i < s.length - 1; i++) {
    sum += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
  }

  return sum;
}

// console.log(scoreOfString("hello"));
// console.log(scoreOfString("zaz"));

export { scoreOfString };
