function makeLowNumber(range: number): number {
  return parseInt("1".padEnd(range, "0"));
}

function makeHighNumber(range: number): number {
  return parseInt("9".padEnd(range, "9"));
}

function isSymmetricInteger(n: number): boolean {
  const nStr = String(n);
  const len = nStr.length;

  if (n < 100 && n % 11 === 0) {
    return true;
  }

  const left = nStr
    .substring(0, len / 2)
    .split("")
    .reduce(
      (accumulator, currentValue) => accumulator + parseInt(currentValue),
      0,
    );
  const right = nStr
    .substring(len / 2)
    .split("")
    .reduce(
      (accumulator, currentValue) => accumulator + parseInt(currentValue),
      0,
    );
  return left === right;
}

function genLowHigh(low: number, heigh: number): Array<number> {
  let rangeNumber: Array<number> = [];
  let lowClone: number = low;
  // CASE 1
  // low = 1, high = 70, []
  // low -> 10, high = 70, [10, 70]
  // CASE 2
  // low = 1, high = 8000, []
  // low -> 10, high = 8000, [10, 99]
  // low -> 100, high = 8000, [10, 99]
  // low -> 1000, high = 8000, [10, 99, 1000, 8000]
  // [10, 99, 1000, 9999]
  while (true) {
    if (lowClone > heigh) {
      break;
    }

    if (
      String(lowClone).length % 2 === 0 &&
      makeHighNumber(String(lowClone).length) <= heigh
    ) {
      rangeNumber = rangeNumber.concat([
        lowClone,
        makeHighNumber(String(lowClone).length),
      ]);
      lowClone = makeLowNumber(String(lowClone).length + 1);
    } else if (
      String(lowClone).length % 2 === 0 &&
      makeHighNumber(String(lowClone).length) > heigh
    ) {
      rangeNumber = rangeNumber.concat([lowClone, heigh]);
      lowClone = makeLowNumber(String(lowClone).length + 1);
    } else {
      lowClone = makeLowNumber(String(lowClone).length + 1);
    }
  }
  return rangeNumber;
}

function countSymmetricIntegers(low: number, high: number): number {
  const lowHighRange: Array<number> = genLowHigh(low, high);
  let count: number = 0;

  for (let i = 0; i < lowHighRange.length; i = i + 2) {
    const lowStart = lowHighRange[i];
    const highEnd = lowHighRange[i + 1];
    for (let c = lowStart; c <= highEnd; c++) {
      if (isSymmetricInteger(c)) {
        count += 1;
      }
    }
  }

  return count;
}

// console.log(countSymmetricIntegers(1, 100));
// console.log(countSymmetricIntegers(1, 8000));
// console.log(countSymmetricIntegers(1, 9999));
// countSymmetricIntegers(2, 70);
// countSymmetricIntegers(11, 70);
// countSymmetricIntegers(1200, 1230);

export { countSymmetricIntegers };
