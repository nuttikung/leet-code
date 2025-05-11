function permute(nums: Array<number>): Array<Array<number>> {
  const output: Array<Array<number>> = [];

  function swapInPlace(
    arrToSwap: Array<number>,
    index1: number,
    index2: number,
  ) {
    const temp = arrToSwap[index1];
    arrToSwap[index1] = arrToSwap[index2];
    arrToSwap[index2] = temp;
  }

  function generate(n: number, heapArray: Array<number>) {
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

  return output;
}

console.log(permute([1, 2, 3]));
console.log(permute([0, -1, 1]));

export { permute };
