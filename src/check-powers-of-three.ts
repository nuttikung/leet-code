function checkPowersOfThree(n: number): boolean {
  let clone = n;
  const trinary: Array<number> = [];

  while (clone > 0) {
    trinary.push(clone % 3);
    clone = Math.floor(clone / 3);
  }

  return !trinary.includes(2);
}

export { checkPowersOfThree };
