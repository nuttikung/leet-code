function tripletNumber(num1: number, num2: number, num3: number) {
  return (num1 - num2) * num3;
}

function maximumTripletValue(nums: number[]): number {
  let maximum = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const value = tripletNumber(nums[i], nums[j], nums[k]);

        if (value > maximum) {
          maximum = value;
        }
      }
    }
  }

  return maximum;
}

// console.log(maximumTripletValue([12, 6, 1, 2, 7]));
// console.log(maximumTripletValue([1, 10, 3, 4, 19]));
// console.log(maximumTripletValue([1, 2, 3]));

export { tripletNumber, maximumTripletValue };
