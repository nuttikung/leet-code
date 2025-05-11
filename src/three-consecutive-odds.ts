function isOdd(num: number) {
  return num % 2 !== 0;
}

function threeConsecutiveOdds(arr: number[]): boolean {
  let isConsecutive: boolean = false;

  for (let i = 0, len = arr.length - 2; i < len; i++) {
    if (isOdd(arr[i]) && isOdd(arr[i + 1]) && isOdd(arr[i + 2])) {
      isConsecutive = true;
      break;
    }
  }

  return isConsecutive;
}

// console.log(threeConsecutiveOdds([2, 6, 4, 1]));
// console.log(threeConsecutiveOdds([1,2,34,3,4,5,7,23,12]));

export { threeConsecutiveOdds };
