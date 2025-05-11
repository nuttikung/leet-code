// recursive way (reduce memory by map) example when calculate 10 -> 1 while next input is 100 = 10 + 0 -> 10 can be in cache.
// 1-9 -> return 1 -9 (optimal)
// 10 -> 1 return 0 + 1
// 11 -> 2 return 1 + 1
// 12 -> 3 return 1 + 2

// ----------------------------------------------------------------------

const memo = new Map<number, number>();

// ----------------------------------------------------------------------
function countSumDigit(n: number): number {
  let sum = 0;

  if (n < 10) {
    return n;
  }

  if (memo.has(n)) {
    return memo.get(n)!;
  }

  // act as while loop
  sum = sum + (n % 10) + countSumDigit(Math.floor(n / 10));

  if (sum >= 10) {
    sum = 0 + (sum % 10) + countSumDigit(Math.floor(sum / 10));
  }

  // cache
  if (!memo.has(n)) {
    memo.set(n, sum);
  }

  return sum;
}

// ----------------------------------------------------------------------

function countLargestGroup(n: number): number {
  let max = 0;
  let ans: string = "0";
  const digits = Array.from({ length: n })
    .fill(0)
    .map((_, index) => index + 1)
    .map(countSumDigit)
    .reduce(
      (previous, current, index) =>
        current in previous
          ? { ...previous, [current]: [...previous[current], index + 1] }
          : { ...previous, [current]: [index + 1] },
      {} as Record<string, Array<number>>,
    );

  const keys = Object.keys(digits).sort();

  for (let i = 0; i < keys.length; i++) {
    const element = digits[keys[i]].length;

    if (element >= max) {
      ans = keys[i];
      console.log(ans);
      max = element;
    }
  }

  return parseInt(ans, 10);
}

// console.log(countLargestGroup(24));

export { countLargestGroup };
