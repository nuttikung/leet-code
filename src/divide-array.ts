function divideArray(nums: number[]): boolean {
  if (nums.length % 2 !== 0) return false;

  const hashMap = new Map<number, number>();

  nums.forEach((value) => {
    const current = hashMap.get(value);
    if (current === undefined) {
      hashMap.set(value, 1);
    } else {
      hashMap.set(value, current + 1);
    }
  });

  let answer = true;

  for (let [_, value] of hashMap) {
    if (value % 2 !== 0) {
      answer = false;
      break;
    }
  }

  hashMap.clear();

  return answer;
}

export { divideArray };
