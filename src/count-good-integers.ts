function isDivisibleByK(n: number, k: number): boolean {
  return n % k === 0;
}

// ----------------------------------------------------------------------

function isValidNumber(t: string): boolean {
  return String(parseInt(t)).length === t.length && parseInt(t) !== 0;
}

// ----------------------------------------------------------------------

function getMaxNumber(n: number): number {
  return parseInt("9".padEnd(n, "9"));
}

// ----------------------------------------------------------------------

function getNumberByLength(n: number, l: number): string {
  if (String(n).length < l) {
    return String(n).padStart(l, "0");
  }
  return String(n);
}

// ----------------------------------------------------------------------

function generatePalindromeNumber(n: number): Array<string> {
  if (n === 1) {
    return ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  }

  const palindrome: Array<string> = [];
  const temp: Array<string> = [];
  const len = Math.floor(n / 2);
  const maxNumber = getMaxNumber(len);

  for (let i = 0; i <= maxNumber; i++) {
    const element = getNumberByLength(i, len);
    temp.push(element);
  }

  temp.forEach((value) => {
    const reverseValue = value.split("").reverse().join("");
    if (n % 2 !== 0) {
      for (let i = 0; i <= 9; i++) {
        const element = value + String(i) + reverseValue;
        palindrome.push(element);
      }
    } else {
      const element = value + reverseValue;
      palindrome.push(element);
    }
  });

  return palindrome;
}

// ----------------------------------------------------------------------

// insertion algorithm (n!)
// function generatePermutation(text: string): Array<string> {
//   if (text.length === 0) {
//     return [];
//   }

//   let temp: Array<string> = [];
//   const original = text.split("");

//   while (original.length > 0) {
//     const element = original.shift()!;

//     if (temp.length === 0) {
//       temp.push(element);
//     } else {
//       let nextPermutation: Array<string> = [];
//       temp.forEach((value) => {
//         for (let i = 0; i < value.length + 1; i++) {
//           const v = value.substring(0, i) + element + value.substring(i);
//           nextPermutation.push(v);
//         }
//       });
//       temp = nextPermutation;
//     }
//   }

//   return temp;
// }

// Heap algorithm
function generatePermutation(nums: Array<string>): Array<string> {
  const output: Array<Array<string>> = [];

  function swapInPlace(
    arrToSwap: Array<string>,
    index1: number,
    index2: number,
  ) {
    const temp = arrToSwap[index1];
    arrToSwap[index1] = arrToSwap[index2];
    arrToSwap[index2] = temp;
  }

  function generate(n: number, heapArray: Array<string>) {
    if (n === 1) {
      output.push([...heapArray]);
      return;
    }

    generate(n - 1, heapArray);

    for (let i = 0; i < n - 1; i++) {
      if (n % 2 === 0) {
        swapInPlace(heapArray, i, n - 1);
      } else {
        swapInPlace(heapArray, 0, n - 1);
      }

      generate(n - 1, heapArray);
    }
  }

  generate(nums.length, [...nums]);

  return output.map((value) => value.join(""));
}

// ----------------------------------------------------------------------

function countGoodIntegers(n: number, k: number): number {
  const palindrome = generatePalindromeNumber(n);
  const answer = new Set<string>();

  palindrome
    .filter((v) => isDivisibleByK(parseInt(v), k)) // k-palindromic
    .filter((v) => isValidNumber(v))
    .map((value) => generatePermutation(value.split("")))
    .flat()
    .filter((v) => isValidNumber(v))
    .forEach((v) => answer.add(v));

  return answer.size;
}

// ----------------------------------------------------------------------

// console.log(countGoodIntegers(3, 5));
// console.log(countGoodIntegers(1, 4));
// console.log(countGoodIntegers(5, 6));
// console.log(countGoodIntegers(7, 1));

export { countGoodIntegers };
