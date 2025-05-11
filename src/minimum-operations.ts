function isDistinctMap(map: Map<number, number>) {
  if (map.size === 0) {
    return true;
  }

  let isDistinct: boolean = true;

  map.forEach((value) => {
    if (value > 1) {
      isDistinct = false;
    }
  });

  return isDistinct;
}

function minimumOperations(nums: number[]): number {
  let freqMap = new Map<number, number>();
  let ans = 0;

  // read to freqMap
  nums.forEach((n) => {
    if (freqMap.has(n) === false) {
      freqMap.set(n, 1);
    } else {
      const updatedCount = freqMap.get(n)! + 1;
      freqMap.set(n, updatedCount);
    }
  });

  if (isDistinctMap(freqMap)) {
    return ans;
  }

  const end = Math.ceil(nums.length / 3);
  for (let i = 0; i < end; i++) {
    const x1 = nums.shift();
    if (x1 !== undefined) {
      const tmpX1 = freqMap.get(x1)! - 1;
      if (tmpX1 === 0) {
        freqMap.delete(x1);
      } else {
        freqMap.set(x1, tmpX1);
      }
    }
    const x2 = nums.shift();
    if (x2 !== undefined) {
      const tmpX2 = freqMap.get(x2)! - 1;
      if (tmpX2 === 0) {
        freqMap.delete(x2);
      } else {
        freqMap.set(x2, tmpX2);
      }
    }
    const x3 = nums.shift();
    if (x3 !== undefined) {
      const tmpX3 = freqMap.get(x3)! - 1;
      if (tmpX3 === 0) {
        freqMap.delete(x3);
      } else {
        freqMap.set(x3, tmpX3);
      }
    }

    ans += 1;

    if (isDistinctMap(freqMap)) {
      break;
    }
  }

  return ans;
}

console.log(minimumOperations([1, 2, 3, 4, 2, 3, 3, 5, 7]));
console.log(minimumOperations([4, 5, 6, 4, 4]));
console.log(minimumOperations([6, 7, 8, 9]));
console.log(minimumOperations([3, 7, 12, 12, 3, 14, 1, 1]));

export { minimumOperations };
