function isPrime(input: number): boolean {
  let answer = true;
  for (let i = 2; i <= input; i++) {
    if (i === input) {
      break;
    }
    if (input % i === 0) {
      answer = false;
      break;
    }
  }
  return answer;
}

function closestPrimes(left: number, right: number): number[] {
  if (left === 1 && right === 1) return [-1, -1];

  const temp: Array<number> = [];

  for (let i = left; i <= right; i++) {
    if (i === 1) continue;
    let isPrime = true;
    // using sieve mark
    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      temp.push(i);
    }
  }

  if (temp.length < 2) {
    return [-1, -1];
  }

  if (temp.length == 2) {
    return temp;
  }

  let diff = Number.MAX_SAFE_INTEGER;
  let ans: Array<number> = [];

  temp.forEach((value, index, selfArray) => {
    if (index + 1 > selfArray.length) {
      return;
    }

    if (selfArray[index + 1] - value < diff) {
      diff = selfArray[index + 1] - value;
      ans = [value, selfArray[index + 1]];
    }
  });

  return ans;
}

export { closestPrimes };
