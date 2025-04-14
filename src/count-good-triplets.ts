function isGoodTriplet(
  i: number,
  j: number,
  k: number,
  a: number,
  b: number,
  c: number,
): boolean {
  return Math.abs(i - j) <= a && Math.abs(j - k) <= b && Math.abs(i - k) <= c;
}

// ----------------------------------------------------------------------

function countGoodTriplets(
  arr: number[],
  a: number,
  b: number,
  c: number,
): number {
  let count: number = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k <= arr.length; k++) {
        const elementI = arr[i];
        const elementJ = arr[j];
        const elementK = arr[k];
        if (isGoodTriplet(elementI, elementJ, elementK, a, b, c)) {
          count += 1;
        }
      }
    }
  }

  return count;
}

// console.log(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3));
// console.log(countGoodTriplets([1, 1, 2, 2, 3], 0, 0, 1));

export { isGoodTriplet, countGoodTriplets };
