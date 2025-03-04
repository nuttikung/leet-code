function countEven(num: number): number {
  let answer = 0;
  for (let i = 1; i <= num; i++) {
    const sum = String(i)
      .split("")
      .map((value) => parseInt(value))
      .reduce((accumulative, current) => (accumulative += current), 0);
    if (sum % 2 === 0) {
      answer += 1;
    }
  }
  return answer;
}

export { countEven };
