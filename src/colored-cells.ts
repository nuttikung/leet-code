function coloredCells(n: number): number {
  if (n === 1) return 1;
  return n * n + ((n - 1) * (n - 1));
}

export { coloredCells };
