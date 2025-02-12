type Decrease = "--X" | "X--"
type Increase = "++X" | "X++"
type Operation = Increase | Decrease

function finalValueAfterOperations(operations: Operation[]): number {
  return operations.reduce(
    (accumulator, current) =>
      current === "--X" || current === "X--"
        ? (accumulator -= 1)
        : (accumulator += 1),
    0
  )
}
